import Card from "@/components/Card"
import Marquee from "@/components/Marquee"
import Section from "@/components/Section"
import Contact from "@/components/organisms/Contact"
import Header from "@/components/organisms/Header"
import PresentationCard from "@/components/organisms/PresentationCard"
import { createClient } from "@/prismicio";
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
    title: 'Claudson - Desenvolvedor',
    description: 'A 3 anos resolvendo problemas através de códigos criativos e eficientes',
    openGraph: {
        title: "Portifólio",
        description: "A 3 anos resolvendo problemas através de códigos criativos e eficientes",
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
            <Header full />

            <Marquee />

            <main className="">
                <Section id="sobre" container={true} paddingY={true} className="bg-primary p-10">
                    <div className='grid gap-10 lg:rounded-2xl overflow-hidden py-14 relative z-40'>
                        <div className="">
                            <h2 className="text-4xl font-bold uppercase">
                                3+ ANOS DE EXPERIÊNCIA<br />
                                Posso te ajudar com
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-4">
                            <PresentationCard
                                className="lg:col-span-6"
                                color="red"
                                icon={(
                                    <img src="/memphis-web-design-with-the-word-create.png" className="relative z-10 h-[200px]" draggable={false} />
                                )}
                                title="Sites"
                                description={`Precisa de um site para sua empresa com o dominio com.br e colocar ele no google?`}
                            ></PresentationCard>
                            <PresentationCard
                                className="lg:col-span-6"
                                color="yellow"
                                icon={(
                                    <img src="/memphis-software-development-and-programming-on-laptop.png" className="relative z-10 h-[200px]" draggable={false} />
                                )}
                                title="Sistemas"
                                description={`Cansou de planilhas e precisa de um sistema para automatizar e facilitar sua vida?`}
                            ></PresentationCard>
                            <PresentationCard
                                className="lg:col-span-4"
                                color="blue"
                                icon={(
                                    <img src="/memphis-cloud-storage-and-cloud-computing.png" className="relative z-10 h-[200px]" draggable={false} />
                                )}
                                title="Servidores"
                                description={`Precisa colocar seu sistema no ar ou configurar um servidor linux?`}
                            ></PresentationCard>
                            <PresentationCard
                                className="lg:col-span-4"
                                color="purple"
                                icon={(
                                    <img src="/memphis-market-segmentation-and-targeted-advertising.png" className="relative z-10 h-[200px]" draggable={false} />
                                )}
                                title="Dados"
                                description={`Tem um monte de planilhas e não sabe como aproveitar e tirar informações delas?`}
                            ></PresentationCard>

                            <div className="grid lg:col-span-4 grid-cols-3 grid-rows-3 gap-2">
                                <a target="_blank" href='https://www.linkedin.com/in/claudson-p-81813a122/' className='px-5 lg:px-10 py-5 col-span-3 rounded-2xl text-white flex items-center  bg-blue-500 gap-5'>
                                    <Linkedin size={32} />
                                    <span className="flex-1">Formações e certificações</span>
                                </a>
                                <a target="_blank" href='https://wa.me/558491065838' className='rounded-2xl items-center justify-center text-white flex  bg-green-500 gap-5'>
                                    <img src="/icons/whatsapp.svg" className="w-[32px]" />
                                </a>
                                <a target="_blank" href='https://github.com/claudsondouglas' className='rounded-2xl items-center justify-center text-white flex  bg-gray-600 gap-5'>
                                    <Github size={32} />
                                </a>
                                <a target="_blank" href='https://www.instagram.com/claudsonpaulino/' className='rounded-2xl items-center justify-center text-white flex  bg-gradient-to-br from-orange-400 to-purple-600 gap-5'>
                                    <Instagram size={32} />
                                </a>
                                <a target="_blank" href='https://www.behance.net/claudson' className='rounded-2xl items-center justify-center text-white flex bg-black gap-5'>
                                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" /></svg>
                                </a>
                                <a target="_blank" href='mailto:contato@claudson.dev' className='col-span-2 rounded-2xl items-center justify-center  text-white flex bg-red-400 gap-5'>
                                    <Mail size={32} />
                                </a>
                            </div>

                        </div>
                    </div>

                </Section>

                <Section id="trabalhos" spaceBottom={false}>
                    <div className="flex justify-between items-center  mb-5">
                        <h2 className='text-4xl font-bold'>Portifólio</h2>
                        <Link href={"/portifolio"}>ver todos</Link>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-10'>
                        {latestBlogPosts.map((document: any, index: number) => (
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
                    </div>
                </Section>

                <Section id="projetos" spaceBottom={true}>
                    <h2 className='text-4xl font-bold mb-3'>Projetos pessoais</h2>
                    <div className='grid lg:grid-cols-3 gap-10'>
                        <Card
                            image="/projetos/delivre.png"
                            title="Delivre"
                            description="solução digital de cardápio projetada para ajudar pequenas empresas a melhorar a eficiência de seus processos de atendimento ao cliente"
                            cta={{
                                href: "https://delivre.claudson.dev",
                                text: "🌎 delivre.claudson.dev"
                            }}
                        />
                    </div>
                </Section>

                <Contact />
            </main>
        </>
    )
}
