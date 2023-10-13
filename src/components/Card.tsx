interface CardInterface {
    image: string,
    title: string,
    description: string
    cta: {
        href: string,
        text: string
    }
}

export default function Card({ image, title, description, cta } : CardInterface) {
    return (
        <div className='flex flex-col justify-between gap-5'>
            <div>
                <img src={image} className='rounded-lg border-gray-50 border-2' />
                <div className='mt-5'>
                    <h3 className='text-2xl font-bold text-gray-600'>{ title }</h3>
                    <p className='text-gray-500'>
                        { description }
                    </p>
                </div>
            </div>
            <a href={cta.href} target='_blank'>
                {cta.text}
            </a>
        </div>
    )
}