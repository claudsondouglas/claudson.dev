import SocialList from "../SocialList";

export default function Header({ full = false }: { full?: boolean }) {
    return (
        <header className='data-[full=true]:h-screen bg-primary flex flex-col relative' data-full={full}>
            <nav className='text-white z-20' id="navbar">
                <div className='max-w-screen-xl mx-auto flex justify-between py-8 px-10 xl:px-0'>
                    <div className="text-2xl">
                        <span className='font-bold'>{`{}`} claudson</span>.dev
                    </div>
                    <div className='flex gap-20'>
                        <ul className='gap-5 hidden lg:flex' id="navbar-menu">
                            <li className="navbar-item"><a href='/#projetos'>Projetos</a></li>
                            <li className="navbar-item"><a href='/#medium'>Medium</a></li>
                        </ul>
                        <div className='hidden lg:flex'>
                            <SocialList />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="absolute z-0 inset-0 bg-black/10">
                <div className="absolute z-0 inset-0 bg-black/95"></div>
                <img src="/headersd.png" className="h-full w-full object-cover" />
            </div>

            {
                full && <div className='max-w-screen-xl mx-auto h-full flex justify-center items-center w-full relative z-20'>
                    <div className='text-center px-10 lg:px-0 text-white'>
                        <span className='text-primary-darkmore block'>console.log</span>
                        <h1 className='text-3xl sm:text-5xl text-center leading-relaxed'>
                            Olá mundo, eu sou
                            <span className='text-4xl sm:text-6xl block font-bold'>Claudson Paulino</span>
                        </h1>
                        <p className='mt-5'>
                            A 3 anos resolvendo problemas através de códigos <u className='text-accent'>criativos e eficientes</u>
                        </p>
                        <a target="_blank" className='bg-accent hover:bg-accent-dark duration-300 text-white mt-10 px-10 lg:px-14 py-4 rounded flex gap-4 w-fit mx-auto' href="https://wa.me/558491065838">
                            <img src="/icons/whatsapp.svg" width={22} />Falar no whatsapp
                        </a>
                    </div>
                </div>
            }

        </header>
    )
}