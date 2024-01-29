import SocialList from '@/components/SocialList'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['400','500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-sans"
})

export const metadata: Metadata = {
    title: 'Claudson.dev',
    description: 'Um pouco de mim e do meu trabalho',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className={inter.variable}>
            <body>
                {children}
                <footer className='bg-body-dark text-primary'>
                    <div className='max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row px-10 sm:px-0 py-10 justify-between items-center gap-10'>
                        <div className='text-xs leading-5 max-w-[600px]'>
                            Prototipado pelo <a href="https://figma.com/">Figma</a> e codado no <a href="https://code.visualstudio.com/">Visual Studio Code</a> por mim mesmo. Construído com <a href="https://nextjs.com/">Next.js</a> e <a href="https://tailwindcss.com/">Tailwind CSS</a>, hospedado na <a href="https://vercel.com/">Vercel</a>. Todo o texto é definido na <a href="https://fonts.google.com/specimen/Inter">fonte Inter</a> e Icones e Ilustrações por <a href='https://icons8.com/'>Icons8</a>.
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