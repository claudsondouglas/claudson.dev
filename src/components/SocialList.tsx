import { Instagram, Github, Linkedin } from 'lucide-react'

export default function SocialList() {
    return (
        <ul className='flex gap-3'>
            <li><a href='https://www.linkedin.com/in/claudson-p-81813a122/' className='text-white'><Linkedin /></a></li>
            <li><a href='https://github.com/claudsondouglas' className='text-white'><Github /></a></li>
            <li><a href='https://instagram.com/claudsonpaulino' className='text-white'><Instagram /></a></li>
        </ul>
    )
}