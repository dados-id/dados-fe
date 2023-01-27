import { Header } from "@components"
import { StarIcon } from "@heroicons/react/20/solid"
export const RatingCard = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1 items-center h-full bg-success p-3 rounded-xl">
            <Header preset="h4" className="text-mariana">
                {rating}
            </Header>
            <StarIcon className="fill-mariana w-5 h-5" />
        </div>
    )
}