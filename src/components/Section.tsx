import { HtmlHTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
    base: "",
    variants: {
        spaceBottom: {
            false: "pb-0"
        },
        background: {
            "accent-neutral": "bg-accent-neutral"
        },
        container: {
            true: "w-full",
            false: "max-w-screen-xl mx-auto px-10 md:px-20 xl:px-0"
        },
        paddingY: {
            true: "py-20",
            false: "py-0",
            small: "py-10"
        }
    },
    defaultVariants: {
        container: false,
        paddingY: true,
    }
})

export default function Section({ children, background, spaceBottom, container, paddingY, ...props }: { children: ReactNode, container?: boolean, id?: string } & VariantProps<typeof variants> & HtmlHTMLAttributes<HTMLElement>) {
    return (
        <section {...props} className={variants({
            spaceBottom,
            background,
            container,
            paddingY,
            class: props.className
        })}>
            { container == true ? <div className='max-w-screen-xl mx-auto'>{children}</div> : children }
        </section>
    )
}