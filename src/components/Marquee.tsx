export default function Marquee() {
    return (
        <div className="bg-neutral-900 text-white">
            <section className="marquee enable-animation py-3">
                <ul className="marquee__content">
                    <span className="text-3xl lg:text-5xl font-bold">DESENVOLVEDOR</span>
                    <span className="text-3xl lg:text-5xl font-bold">UX & UI</span>
                    <span className="text-3xl lg:text-5xl font-bold">CIÊNCIA DE DADOS</span>
                    <span className="text-3xl lg:text-5xl font-bold">DEVOPS</span>
                </ul>

                <ul aria-hidden="true" className="marquee__content">
                    <span className="text-3xl lg:text-5xl font-bold">DESENVOLVEDOR</span>
                    <span className="text-3xl lg:text-5xl font-bold">UX & UI</span>
                    <span className="text-3xl lg:text-5xl font-bold">CIÊNTISTA DE DADOS</span>
                    <span className="text-3xl lg:text-5xl font-bold">DEVOPS</span>
                </ul>
            </section>
        </div>
    )
}