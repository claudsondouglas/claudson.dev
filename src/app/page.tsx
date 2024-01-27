import Card from "@/components/Card"
import Marquee from "@/components/Marquee"
import Section from "@/components/Section"
import SocialList from "@/components/SocialList"
import Header from "@/components/organisms/Header"
import PresentationCard from "@/components/organisms/PresentationCard"
import { Metadata } from "next"
import Script from "next/script"


export const metadata: Metadata = {
    title: 'Claudson - Desenvolvedor',
    description: 'A 3 anos resolvendo problemas através de códigos criativos e eficientes',
    openGraph: {
        title: "Portifólio",
        description: "A 3 anos resolvendo problemas através de códigos criativos e eficientes",
        siteName: "claudson.dev"
    }
}

export default function Home() {

    return (
        <>
            <Header full />

            <Marquee />

            <main className="">
                <Section id="sobre" container={true} spaceBottom={false} paddingY={true} className="bg-primary">
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 bg-white lg:rounded-2xl overflow-hidden p-10 lg:p-20 py-14 relative z-40'>
                        <div className="md:col-span-2 lg:col-span-4">
                            <h2 className="text-4xl font-bold uppercase">
                                3+ ANOS DE EXPERIÊNCIA<br />
                                Posso te ajudar com
                            </h2>
                        </div>
                        <PresentationCard
                            color="red"
                            icon={(<svg width="90" height="78" viewBox="0 0 90 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5 1.34401C24.036 4.81401 15.165 11.835 11.049 19.905L8.95901 24H12.347C15.192 24 16.159 23.359 18.386 19.992C20.801 16.344 28.212 10 30.059 10C30.477 10 29.948 11.803 28.883 14.006C27.819 16.209 26.678 19.359 26.349 21.006C25.789 23.807 25.946 24 28.795 24C31.565 24 31.991 23.544 33.522 18.935C35.517 12.928 41.665 6.00001 45 6.00001C48.335 6.00001 54.483 12.928 56.478 18.935C58.009 23.544 58.435 24 61.205 24C64.054 24 64.211 23.807 63.651 21.006C63.322 19.359 62.141 16.125 61.026 13.818C59.912 11.512 59 9.46201 59 9.26401C59 7.83601 68.821 16.106 71.298 19.621C73.89 23.297 74.919 24 77.713 24H81.041L78.951 19.905C75.793 13.714 68.67 7.20801 61.246 3.73401C55.859 1.21401 53.057 0.563014 46.545 0.319014C41.72 0.138014 36.899 0.548014 34.5 1.34401ZM0.0260106 30.75C0.0400106 31.163 1.30301 36.45 2.83301 42.5C5.57601 53.349 5.65601 53.504 8.68801 53.804C11.726 54.105 11.776 54.033 13.064 47.554C13.781 43.95 14.652 41 15 41C15.348 41 16.219 43.95 16.936 47.554C18.226 54.047 18.268 54.106 21.34 53.804C24.4 53.504 24.475 53.363 26.923 43.25C28.288 37.612 29.673 33 30 33C30.327 33 31.712 37.612 33.077 43.25C35.525 53.363 35.6 53.504 38.66 53.804C41.732 54.106 41.774 54.047 43.064 47.554C43.781 43.95 44.652 41 45 41C45.348 41 46.219 43.95 46.936 47.554C48.226 54.047 48.268 54.106 51.34 53.804C54.4 53.504 54.475 53.363 56.923 43.25C58.288 37.612 59.673 33 60 33C60.327 33 61.712 37.612 63.077 43.25C65.525 53.363 65.6 53.504 68.66 53.804C71.732 54.106 71.774 54.047 73.064 47.554C73.781 43.95 74.652 41 75 41C75.348 41 76.219 43.95 76.936 47.554C78.224 54.033 78.274 54.105 81.312 53.804C84.344 53.504 84.424 53.349 87.167 42.5C88.697 36.45 89.96 31.163 89.974 30.75C90.021 29.394 84.226 29.968 83.687 31.372C83.398 32.127 82.849 34.822 82.468 37.362C81.825 41.654 80.007 42.998 79.994 39.191C79.991 38.261 79.52 35.813 78.947 33.75C78.049 30.516 77.506 30 75 30C72.494 30 71.951 30.516 71.053 33.75C70.48 35.813 70.009 38.261 70.006 39.191C69.993 42.998 68.175 41.654 67.532 37.362C66.434 30.046 66.387 30 60 30C53.613 30 53.566 30.046 52.468 37.362C51.825 41.654 50.007 42.998 49.994 39.191C49.991 38.261 49.52 35.813 48.947 33.75C48.049 30.516 47.506 30 45 30C42.494 30 41.951 30.516 41.053 33.75C40.48 35.813 40.009 38.261 40.006 39.191C39.993 42.998 38.175 41.654 37.532 37.362C36.434 30.046 36.387 30 30 30C23.613 30 23.566 30.046 22.468 37.362C21.825 41.654 20.007 42.998 19.994 39.191C19.991 38.261 19.52 35.813 18.947 33.75C18.049 30.516 17.506 30 15 30C12.494 30 11.951 30.516 11.053 33.75C10.48 35.813 10.009 38.261 10.006 39.191C9.99301 42.998 8.17501 41.654 7.53201 37.362C7.15101 34.822 6.60201 32.127 6.31301 31.372C5.77401 29.968 -0.0209894 29.394 0.0260106 30.75ZM14.129 62.96C17.309 67.262 23.231 71.75 29.774 74.816C34.727 77.138 36.782 77.5 45 77.5C53.556 77.5 55.152 77.191 61.062 74.391C64.992 72.528 69.789 69.12 73.025 65.891L78.426 60.5L74.588 60.182C71.626 59.937 70.152 60.421 68.125 62.303C65.195 65.024 60 68.499 60 67.737C60 67.466 60.681 65.614 61.513 63.622L63.027 60L59.763 60.054C56.997 60.1 56.043 60.82 53.5 64.782C51.85 67.352 49.263 70.14 47.75 70.978C45.288 72.341 44.712 72.341 42.25 70.978C40.737 70.14 38.15 67.352 36.5 64.782C33.957 60.82 33.003 60.1 30.237 60.054L26.973 60L28.487 63.622C29.319 65.614 30 67.466 30 67.737C30 68.489 24.821 65.039 21.945 62.371C20.207 60.758 18.2 60 15.665 60H11.94L14.129 62.96Z" className="fill-current" />
                            </svg>)}
                            title="Sites"
                        ></PresentationCard>

                        <PresentationCard
                            color="yellow"
                            icon={(
                                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00761 6.828C3.29033 10.583 0.25 14.246 0.25 14.968C0.25 15.69 4.57099 20.724 9.85099 26.155L19.453 36.029L14.3125 41.288C9.67383 46.035 8.78707 47.706 5.21528 58.449C3.03895 64.996 1.44852 70.544 1.68109 70.78C1.91367 71.015 7.1432 69.533 13.3011 67.487C23.5305 64.088 24.9873 63.285 30.1723 58.18L35.8472 52.594L45.6214 62.297C50.9974 67.634 56.026 72 56.798 72C58.6418 72 71.5077 58.874 71.5077 56.993C71.5077 56.191 67.165 51.121 61.8582 45.725L52.2088 35.915L59.8215 28.919C68.5436 20.904 71.5077 16.622 71.5077 12.036C71.5077 3.759 62.3145 -2.462 55.3599 1.11C54.1713 1.721 49.301 6.1 44.5377 10.841L35.8769 19.46L26.2106 9.73C20.894 4.379 15.9188 0 15.1547 0C14.3897 0 10.7239 3.072 7.00761 6.828ZM17.5973 10.031C19.2966 11.928 19.3075 12.173 17.7646 13.731C16.2216 15.29 16.2533 15.553 18.2495 17.699C20.2675 19.869 20.4892 19.903 22.235 18.306C23.9907 16.701 24.2678 16.801 27.7377 20.308L31.3926 24L27.6931 27.738L23.9937 31.476L15.8643 23.261L7.73404 15.047L11.1138 11.523C12.9735 9.586 14.7826 8 15.1359 8C15.4893 8 16.5967 8.914 17.5973 10.031ZM40.1365 40.048C24.7082 55.426 20.792 58.814 17.2192 59.869C14.8489 60.57 12.2975 61.38 11.5483 61.671C10.4973 62.078 10.6239 60.911 12.1065 56.559C13.8038 51.574 16.1286 48.722 32.1279 31.998L50.2294 13.077L54.487 17.289L58.7447 21.5L40.1365 40.048ZM51.7228 44.509C54.8839 47.805 54.9868 48.121 53.4152 49.71C51.8436 51.298 51.8713 51.541 53.8784 53.699C55.8934 55.866 56.12 55.901 57.8579 54.312C59.5948 52.723 59.8264 52.753 61.8711 54.819L64.0415 57.011L60.347 60.743L56.6535 64.476L48.5241 56.261L40.3938 48.047L43.7736 44.523C45.6333 42.586 47.4246 41 47.7552 41C48.0857 41 49.8711 42.579 51.7228 44.509Z" className="fill-current" />
                                </svg>
                            )}
                            title="Design"
                        ></PresentationCard>
                        <PresentationCard
                            color="blue"
                            icon={(<svg width="67" height="72" viewBox="0 0 67 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.34478 1.549C-1.22083 5.149 -1.07337 25.041 5.54469 28.498C9.15508 30.385 10.8475 30.385 14.4578 28.498C18.9768 26.137 20.8394 15.764 18.3622 6.752C16.7391 0.847001 10.887 -1.492 5.34478 1.549ZM24.3518 15V30H27.8157H31.2796V15V0H27.8157H24.3518V15ZM40.9736 1.549C34.408 5.149 34.5555 25.041 41.1736 28.498C44.784 30.385 46.4763 30.385 50.0867 28.498C56.8413 24.969 56.8413 5.031 50.0867 1.502C46.5367 -0.353 44.4217 -0.343 40.9736 1.549ZM59.9806 15V30H63.4446H66.9085V15V0H63.4446H59.9806V15ZM11.9807 15.014C11.9807 22.833 11.8253 23.5 10.0013 23.5C8.22675 23.5 7.99121 22.734 7.72795 16.094C7.38849 7.526 7.84671 5.723 10.2457 6.19C11.7362 6.48 11.9807 7.721 11.9807 15.014ZM47.6095 15.014C47.6095 22.833 47.4541 23.5 45.6301 23.5C43.8556 23.5 43.6201 22.734 43.3568 16.094C43.0174 7.526 43.4756 5.723 45.8746 6.19C47.3651 6.48 47.6095 7.721 47.6095 15.014ZM19.4033 41.685C15.6801 43.113 13.5642 46.349 12.9129 51.615C11.4235 63.664 14.8161 71 21.8776 71C28.939 71 32.3317 63.664 30.8422 51.615C30.3938 47.99 29.4715 45.576 28.0067 44.195C25.6176 41.942 21.7083 40.802 19.4033 41.685ZM0.599209 57V72H4.06313H7.52704V57V42H4.06313H0.599209V57ZM40.9736 43.549C34.408 47.149 34.5555 67.041 41.1736 70.498C44.784 72.385 46.4763 72.385 50.0867 70.498C56.8413 66.969 56.8413 47.031 50.0867 43.502C46.5367 41.647 44.4217 41.657 40.9736 43.549ZM59.9806 57V72H63.4446H66.9085V57V42H63.4446H59.9806V57ZM24.142 56.372C23.8837 63.737 23.6709 64.5 21.8776 64.5C20.0892 64.5 19.8695 63.735 19.6062 56.587C19.3103 48.553 20.0862 46.56 23.0632 47.714C24.1024 48.117 24.3597 50.183 24.142 56.372ZM47.6095 57.014C47.6095 64.833 47.4541 65.5 45.6301 65.5C43.8556 65.5 43.6201 64.734 43.3568 58.094C43.0174 49.526 43.4756 47.723 45.8746 48.19C47.3651 48.48 47.6095 49.721 47.6095 57.014Z" className="fill-current" />
                            </svg>)}
                            title="Sistemas"
                        ></PresentationCard>
                        <PresentationCard
                            color="purple"
                            icon={(<svg width="72" height="78" viewBox="0 0 72 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64287 2.923L0.75 5.846V39V72.154L3.64287 75.077L6.53573 78H36.2472H65.9587L68.7358 75.587L71.5129 73.173V39V4.827L68.7358 2.413L65.9587 0H36.2472H6.53573L3.64287 2.923ZM64.882 7.2C65.6025 7.928 66.0696 11.467 66.0696 16.2V24H45.2861H24.5026V27V30H45.2861H66.0696V39V48H45.2861H24.5026V51V54H45.2861H66.0696V61.878C66.0696 67.332 65.6519 70.105 64.7127 70.893C63.7507 71.7 55.1642 71.954 35.2694 71.766L7.18299 71.5L6.89697 62.75L6.61095 54H12.5877H18.5644V51V48H12.6263H6.68814V39V30H12.6263H18.5644V27V24H12.6263H6.68814V15.667C6.68814 11.083 6.98505 7.033 7.34827 6.667C7.71049 6.3 20.5369 6 35.8514 6C56.1875 6 64.015 6.324 64.882 7.2Z" className="fill-current" />
                            </svg>)}
                            title="Dados"
                        ></PresentationCard>
                    </div>
                    <div className='text-center mt-7 px-10'>
                        <a href='https://www.linkedin.com/in/claudson-p-81813a122/' className='mx-auto'>Veja mais sobre formações, certificações e experiências no linkedin</a>
                    </div>
                </Section>

                <Section id="trabalhos" spaceBottom={false}>
                    <h2 className='text-4xl font-bold mb-3'>Trabalhos</h2>

                    <div className='grid lg:grid-cols-3 gap-10'>
                        <Card
                            image="/trabalhos/ladrilhos-saltense.png"
                            title="Simulador Ladrilhos Saltense"
                            description="Projeto otimizou simulador da Ladrilhos Saltense, empresa de 1950 em Salto/SP, permitindo escolher ladrilhos, pintura, rejunte e solicitar orçamento online." cta={{
                                local: true,
                                href: "/portifolio/simulador-ladrilho-saltense",
                                text: "🌎 ver projeto"
                            }}
                        />

                        <Card
                            image="/trabalhos/inteligencia-para-o-sucesso.png"
                            title="Inteligência para o Sucesso"
                            description="Projeto de página de lançamento para um curso de mentoria sobre Desenvolvimento Humano e Autoconhecimento." cta={{
                                href: "https://vpi.voceporinteiro.com/",
                                text: "🌎 vpi.voceporinteiro.com"
                            }}
                        />
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

                <Section paddingY="small" id="contato" container={true} background="accent-neutral">
                    <div className='flex flex-col md:flex-row gap-10 justify-between max-w-screen-xl mx-auto items-center text-gray-500 px-10 xl:px-0'>
                        <h2 className='text-4xl font-bold mb-3 max-w-sm text-gray-700 text-center md:text-left'> Precisa de algo? Fala comigo! 😉</h2>
                        <div className='flex flex-col text-center'>
                            <a target="_blank" className='bg-accent hover:bg-accent-dark duration-300 text-white mt-10 px-10 lg:px-14 py-4 rounded flex gap-4 w-fit mx-auto' href="https://wa.me/558491065838">
                                <img src="/icons/whatsapp.svg" width={22} />Falar no whatsapp
                            </a>
                            ou
                            <a href='mailto:contato@claudson.dev'>
                                contato@claudson.dev
                            </a>
                        </div>
                    </div>
                </Section>
            </main>
        </>
    )
}
