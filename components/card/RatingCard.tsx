import { Header } from "@components"
import { StarIcon } from "@heroicons/react/20/solid"
export const RatingCard = ({
    rating,
    className,
}: {
    rating: number
    className?: string
}) => {
    return (
        <div
            className={`flex gap-1 items-center  h-full ${className} ${
                rating >= 4
                    ? "bg-success"
                    : rating >= 3
                    ? "bg-warning"
                    : "bg-danger"
            } p-3 rounded-xl`}
        >
            <Header preset="h4" className="text-mariana">
                {rating}
            </Header>
            <StarIcon className="fill-mariana w-5 h-5" />
        </div>
    )
}
