import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
    base: "px-10 md:px-20 xl:px-0 py-20",
    variants: {
        spaceBottom: {
            false: "pb-0"
        },
        background: {
            "accent-neutral": "bg-accent-neutral"
        },
        container: {
            true: "w-full",
            false: "max-w-screen-xl mx-auto"
        }
    },
    defaultVariants: {
        container: false,
    }
})

export default function Section({ children, background, spaceBottom, container, id }: { children: ReactNode, container?: boolean, id?: string } & VariantProps<typeof variants>) {
    return (
        <section id={id} className={variants({
            spaceBottom,
            background,
            container
        })}>
            { container == true ? <div className='max-w-screen-xl mx-auto'>{children}</div> : children }
        </section>
    )
}