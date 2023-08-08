import { Header } from "@components"
import { StarIcon } from "@heroicons/react/20/solid"
export const RatingCard = ({
    rating,
    className,
    preset,
    size
}: {
    rating: number
    preset: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "decorative"
    className?: string,
    size: "sm" | "lg"
}) => {
    return (
        <div
            className={`flex gap-1 items-center ${className} ${
                rating >= 4
                    ? "bg-success"
                    : rating >= 3
                    ? "bg-warning"
                    : "bg-danger"
            } rounded-xl`}
        >
            <Header preset={preset} className="text-mariana">
                {rating}
            </Header>
            <StarIcon className={`fill-mariana ${size === 'sm' ? 'w-5 h-5' : 'w-10 h-10'}`} />
        </div>
    )
}
