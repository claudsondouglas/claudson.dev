import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Header from "@/components/organisms/Header";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { DateTime } from "luxon";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    const page = await client
        .getByUID("portifolio", params.uid)
        .catch(() => notFound());

    return (
        <>
            <Header />
            <div className="max-w-screen-md mx-auto py-14 md:py-20 px-10 md:px-20 2xl:px-0 text-gray-700">
                <div className="mb-5 text-gray-200">
                    <Link href={'/'}>Inicio</Link> {`/`} <Link href={'/portifolio'}>Portifólio</Link>
                </div>
                <PrismicRichText field={page.data.title}
                    components={{
                        heading1: ({ children }) => <h1 className="text-4xl font-bold mb-5">{children}</h1>
                    }}
                />

                <PrismicRichText field={page.data.post}
                    components={{
                        heading2: ({ children }) => <h2 className="text-2xl font-bold mt-10">{children}</h2>,
                        paragraph: ({ children }) => <p className="mb-5">{children}</p>,
                        image: ({ node, key }) => {
                            const img = (
                                <img
                                    src={node.url}
                                    alt={node.alt ?? undefined}
                                    data-copyright={node.copyright ? node.copyright : undefined}
                                    draggable={false}
                                    className="w-full border-2 border-gray-100"
                                />
                            )

                            return (
                                <div key={key} className='block-img py-8'>
                                    {img}
                                </div>
                            )
                        },
                    }}
                />


                <div className="flex justify-between items-center">
                    <PrismicNextLink field={page.data.project_link}>
                        Link do projeto
                    </PrismicNextLink>

                    <div>
                     { DateTime.fromISO(page.last_publication_date).toFormat("dd 'de' LLL 'de' yyyy") }
                    </div>
                </div>
            </div>
            <SliceZone slices={page.data.slices} components={components} />
        </>
    )
}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const client = createClient();
    const page = await client
        .getByUID("portifolio", params.uid)
        .catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
        openGraph: {
            title: page.data.meta_title,
            description: page.data.meta_description,
            siteName: "claudson.dev",
            images: [
                {
                    url: page.data.meta_image.url,
                    width: 800,
                    height: 600
                }
            ]
        }
    } as Metadata;
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("portifolio");

    return pages.map((page) => {
        return { uid: page.uid };
    });
}
