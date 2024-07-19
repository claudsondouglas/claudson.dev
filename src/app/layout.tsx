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
            </body>
        </html>
    )
}