import { Instagram, Github, Linkedin } from 'lucide-react'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['400','500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-sans"
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className={inter.variable}>
            <body>
                <nav className='bg-primary text-body-dark' id="navbar">
                    <div className='max-w-screen-xl mx-auto flex justify-between py-8 px-10'>
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
                {children}

                <footer className='bg-body-dark text-primary'>
                    <div className='max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row px-10 sm:px-0 py-10 justify-between items-center gap-10'>
                        <div className='text-xs leading-5 max-w-[600px]'>
                            Prototipado pelo <a href="">Figma</a> e codado no <a href="">Visual Studio Code</a> por mim mesmo. Construído com <a href="">Next.js</a> e <a href="">Tailwind CSS</a>, <a href="">hospedado na Vercel</a>. Todo o texto é definido na <a href="">fonte Inter</a>.
                        </div>
                        <div>
                            <SocialList />
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}

function SocialList() {
    return (
        <ul className='flex gap-3'>
            <li><a href='#' className='text-white'><Linkedin /></a></li>
            <li><a href='#' className='text-white'><Github /></a></li>
            <li><a href='#' className='text-white'><Instagram /></a></li>
        </ul>
    )
}