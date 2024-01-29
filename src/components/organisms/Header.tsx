import { Plus } from "lucide-react";
import SocialList from "../SocialList";
import Link from "next/link";

export default function Header({ full = false }: { full?: boolean }) {
    return (
        <header className='data-[full=true]:h-screen bg-black data-[full=true]:bg-primary  flex flex-col relative' data-full={full}>
            <nav className='text-black data-[full="false"]:text-white z-20' id="navbar" data-full={full}>
                <div className='max-w-screen-xl mx-auto flex justify-between py-8 px-10 xl:px-0'>
                    <div className="text-2xl">
                        <Link href="/">
                            <span className='font-bold'><span className="text-accent">{`{}`}</span> claudson</span>.dev
                        </Link>
                    </div>
                    <div className='flex gap-20'>
                        <ul className='gap-5 hidden lg:flex' id="navbar-menu">
                            <li className="navbar-item"><a href='/portifolio'>Portifólio</a></li>
                        </ul>
                        <div className='hidden lg:flex'>
                            <SocialList />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="absolute z-0 inset-0 bg-white data-[full=false]:hidden" data-full={full}>
                <div className="absolute z-0 inset-0 bg-white/95"></div>
                <img src="/square-line-light.png" className="h-full w-full object-cover" />
            </div>

            {
                full && <div className='max-w-screen-xl mx-auto h-full flex items-center w-full relative z-20'>
                    <div className='px-10 lg:px-0 text-black w-full'>
                        <h1 className='text-3xl sm:text-6xl leading-relaxed'>
                            Olá mundo, eu sou
                            <span className='text-4xl sm:text-8xl block font-bold'>Claudson Paulino</span>
                        </h1>


                        <div className="grid lg:grid-cols-3 w-full mt-10 gap-10">
                            <div>
                                <p className="lg:text-xl">
                                    3 Anos de Excelência: Desenvolvimento de Códigos Inovadores Impulsionando mais de <strong>20 milhões</strong> em receitas para clientes de projetos feitos por mim.
                                </p>
                                <div className="border-b-2 border-accent w-[320px] mt-10"></div>
                                <div className="mt-5 flex">
                                    <span className="rounded-full w-12 h-12 p-1 flex justify-center items-center bg-white drop-shadow overflow-hidden">
                                        <img src="/clientes/websocorro.png" title="WebSocorro" />
                                    </span>
                                    <span className="rounded-full w-12 h-12 -ml-4 p-2 flex justify-center items-center bg-white drop-shadow overflow-hidden">
                                        <img src="/clientes/ladrilhos.png" title="Ladrilho Saltense" />
                                    </span>
                                    <span className="rounded-full w-12 h-12 -ml-4 p-1 flex justify-center items-center bg-white drop-shadow overflow-hidden">
                                        <img src="/clientes/VPI_01_400px-300x300.png" title="Você Por Inteiro" />
                                    </span>

                                    <a href="https://wa.me/558491065838">
                                        <button className="rounded-full w-12 h-12 -ml-4 bg-accent text-white flex justify-center items-center drop-shadow overflow-hidden">
                                            <Plus />
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="w-full aspect-[16/10] bg-gray-50 rounded-lg overflow-hidden drop-shadow-xl">
                                    <img src="/eu.jpg" draggable={false} />
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <a target="_blank" className='bg-accent hover:bg-accent-dark duration-300 text-white rounded-full px-10 lg:px-14 py-4 flex gap-4 w-fit lg:aspect-square lg:flex-col items-center justify-center' href="https://wa.me/558491065838">
                                    <img src="/icons/whatsapp.svg" className="w-8 lg:w-20" />
                                    Falar no whatsapp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </header>
    )
}