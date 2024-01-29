import Section from "../Section";

export default function Contact() {
    return (
        <Section paddingY="small" id="contato" container={true} background="accent-neutral">
            <div className='flex flex-col md:flex-row gap-10 justify-between max-w-screen-xl mx-auto items-center text-gray-500 xl:px-0'>
                <h2 className='text-4xl font-bold mb-3 max-w-sm text-gray-700 text-center md:text-left'> Precisa de algo? Fala comigo! 😉</h2>
                <div className='flex flex-col text-center'>
                    <a target="_blank" className='bg-accent hover:bg-accent-dark duration-300 text-white mt-10 lg:px-14 py-4 rounded flex gap-4 w-fit mx-auto' href="https://wa.me/558491065838">
                        <img src="/icons/whatsapp.svg" width={22} />Falar no whatsapp
                    </a>
                    ou
                    <a href='mailto:contato@claudson.dev'>
                        contato@claudson.dev
                    </a>
                </div>
            </div>
        </Section>
    )
}