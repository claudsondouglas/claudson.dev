import { VariantProps, tv } from "tailwind-variants"

const styles = tv({
    base: "p-10 md:p-20 lg:p-10 flex flex-col justify-between aspect-square",
    variants: {
        color: {
            red: "bg-[#FFDFDF]",
            yellow: "bg-[#F6FF8B]",
            blue: "bg-[#C9ECF4]",
            purple: "bg-[#ead0ff]"
        }
    }
})

export default function PresentationCard({ title, icon, color }: { title: string, icon: any } & VariantProps<typeof styles>) {
    return (
        <div className={styles({
            color
        })}>
            {
                icon
            }
            <h3 className='text-xl font-bold'>{title}</h3>
        </div>
    )
}