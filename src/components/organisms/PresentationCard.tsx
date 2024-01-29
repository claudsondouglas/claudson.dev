import { VariantProps, tv } from "tailwind-variants"

const styles = tv({
    base: "p-5 lg:p-10 flex flex-col justify-between h-full text-gray-700  rounded-2xl shadow-lg shadow-black/5",
    variants: {
        color: {
            red: "bg-[#FFDFDF]",
            yellow: "bg-[#F6FF8B]",
            blue: "bg-[#C9ECF4]",
            purple: "bg-[#ead0ff]"
        }
    }
})

const styles2 = tv({
    base: "absolute bg-gradient-to-b from-transparent to-[#FFDFDF] inset-0 z-20",
    variants: {
        color: {
            red: "to-[#FFDFDF]",
            yellow: "to-[#F6FF8B]",
            blue: "to-[#C9ECF4]",
            purple: "to-[#ead0ff]"
        }
    }
})

export default function PresentationCard({ title, description, icon, color, className }: { title: string, description: string, icon: any, className?: string } & VariantProps<typeof styles>) {
    return (
        <div className={styles({
            color,
            class: className
        })}>
            {
                icon &&
                <div className="relative">
                    <div className={styles2({ color })}></div>
                    {icon}
                </div>
            }
            <h3 className='text-xl font-bold'>{title}</h3>
            { description && <p className="text-sm" dangerouslySetInnerHTML={{ __html: description }}></p>}
        </div>
    )
}