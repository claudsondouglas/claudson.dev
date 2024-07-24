import Card from "@/components/Card";
import { createClient } from "@/prismicio";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Claudson - Desenvolvedor',
    description: 'A 4 anos resolvendo problemas através de códigos criativos e eficientes',
    openGraph: {
        title: "Portifólio",
        description: "A 4 anos resolvendo problemas através de códigos criativos e eficientes",
        siteName: "claudson.dev"
    }
}

export default async function Home() {
    const client = createClient();

    const latestBlogPosts = await client.getAllByType('portifolio', {
        fetchOptions: {
            cache: 'default',
            next: { tags: ['prismic', 'portifolio_home'], revalidate: 3600 },
        },
        limit: 3,
    })

    return (
        <>
            <main className="max-w-screen-xl mx-auto py-20 pb-10 px-10">
                <div className="max-w">
                    <h1 className="text-4xl md:text-7xl font-bold leading-snug">
                        Olá, mundo<br />
                        <span className="md:text-8xl">Eu sou <u className="font-extrabold">Claudson</u></span>
                    </h1>
                    <p className="text-lg md:text-2xl mt-5 md:leading-10 text-gray-500">
                        Sou um programador de sites e sistemas a 4 anos e atualmente trabalho como desenvolvedor na <a className="text-blue-400 bg-blue-50 px-3 hover:underline" href="https://www.websocorro.com.br">WebSocorro</a> e como <span className="bg-blue-600/5 px-3 text-blue-800">freelancer</span> nas horas extras.
                    </p>

                    <div className="flex flex-col gap-3 mt-10">
                        <h2>
                            Você pode me encontrar em
                        </h2>

                        <div className="flex gap-10 gap-y-3 flex-wrap">
                            <a href="https://www.instagram.com/claudsonpaulino/" className="flex items-center gap-2">
                                Instagram
                                <ArrowUpRight size={18} className="relative top-[1px]" />
                            </a>
                            <a href="https://www.linkedin.com/in/claudson-p-81813a122/" className="flex items-center gap-2">
                                Linkedin
                                <ArrowUpRight size={18} className="relative top-[1px]" />
                            </a>
                            <a href="https://github.com/claudsondouglas" className="flex items-center gap-2">
                                Github
                                <ArrowUpRight size={18} className="relative top-[1px]" />
                            </a>
                        </div>

                        <div className="text-gray-400">
                            ou fala direito comigo
                        </div>

                        <div>
                            <a href="https://wa.me/558491065838" className="inline-flex items-center gap-2 bg-blue-600 text-white px-14 py-3.5 text-lg">
                                Whatsapp
                                <img src="/icons/whatsapp.svg" width={22} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-5">Portifólio</h2>

                    <div className='grid lg:grid-cols-3 gap-10'>
                        {latestBlogPosts.map((document: any, index: number) => (
                            <Card
                                key={index}
                                image={document.data.meta_image.url}
                                title={document.data.title[0].text}
                                description={document.data.meta_description} cta={{
                                    local: true,
                                    href: '/portifolio/' + document.uid,
                                    text: "ver projeto"
                                }}
                            />
                        ))}
                    </div>
                </div>


                <div className="mt-20 mb-10">
                    <h2 className="text-2xl font-bold">Para a WebSocorro</h2>
                    <div className="flex flex-wrap gap-2 my-3">
                        <a href="https://bridge" target="_blank">bridge</a>
                        <a href="https://innsights.com.br" target="_blank">innsights.com.br</a>
                        <a href="https://innsights.bio" target="_blank">innsights.bio</a>
                        <a href="https://mkt.hotelfazenda7belo.com.br" target="_blank">mkt.hotelfazenda7belo.com.br</a>
                        <a href="https://www.passeioseco.com.br" target="_blank">www.passeioseco.com.br</a>
                        <a href="https://mkt.pousadaaltodaboavista.com.br" target="_blank">mkt.pousadaaltodaboavista.com.br</a>
                        <a href="https://www.chalesrecantoparaiso.com.br" target="_blank">www.chalesrecantoparaiso.com.br</a>
                        <a href="https://www.momentosocorro.com.br" target="_blank">www.momentosocorro.com.br</a>
                        <a href="https://www.visitesocorrosp.com.br" target="_blank">www.visitesocorrosp.com.br</a>
                        <a href="https://mkt.parkhotelmodelo.com.br" target="_blank">mkt.parkhotelmodelo.com.br</a>
                        <a href="https://www.portoemar.com.br" target="_blank">www.portoemar.com.br</a>
                    </div>
                    <p className="text-gray-500 text-sm">
                        e mais algumas dezenas de projetos para outros clientes e ferramentas internas em 3 anos de dedicação ao ramo de marketing hoteleiro.
                    </p>
                </div>
            </main>
            <footer className="bg-gray-100">
                <div className="max-w-screen-xl mx-auto text-center lg:text-left px-10 py-14">
                    &copy; Claudson.dev - portifolio quase nunca atualizado, mas feito com ❤️ e ☕.
                </div>
            </footer>
        </>
    )
}
