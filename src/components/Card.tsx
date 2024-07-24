import Link from "next/link"

interface CardInterface {
    image: string,
    title: string,
    description: string
    cta: {
        href: string,
        text: string,
        local?: boolean,
    }
}

export default function Card({ image, title, description, cta }: CardInterface) {
    return (
        <Link href={cta.href} className="hover:underline decoration-gray-400">
            <div className='flex flex-col justify-between gap-5'>
                <div>
                    <img src={image} className='rounded-lg border-gray-50 border-2' />
                    <div className='mt-5'>
                        <h3 className='text-2xl font-bold text-gray-600'>{title}</h3>
                        <p className='text-gray-500 text-sm mt-2'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}