import Card from "@/components/Card";
import Contact from "@/components/organisms/Contact";
import Header from "@/components/organisms/Header";
import { createClient } from "@/prismicio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Claudson - Portifólio',
    description: 'Esses são os meus trabalhos recentes como freelancer',
    openGraph: {
        title: "Portifólio",
        description: "Esses são os meus trabalhos recentes como freelancer",
        siteName: "claudson.dev"
    }
}

export default async function Page() {
    const client = createClient();

    const documents = await client.getAllByType('portifolio')

    return (
        <div>
            <Header />
            <div className="bg-black text-white py-20 text-center px-10">
                <h1 className="text-5xl font-bold mb-5">Portifólio</h1>
                <p className="text-gray-300">Esses são os meus trabalhos recentes como freelancer</p>
            </div>

            <main className="max-w-screen-xl mx-auto grid lg:grid-cols-2 xl:grid-cols-3 py-20 gap-10 px-10">
                {documents.map((document: any, index: number) => (
                    <Card
                        key={index}
                        image={document.data.meta_image.url}
                        title={document.data.title[0].text}
                        description={document.data.meta_description} cta={{
                            local: true,
                            href: '/portifolio/' + document.uid,
                            text: "🌎 ver projeto"
                        }}
                    />
                ))}
            </main>

            <Contact />
        </div>
    )
}