import { ShowingReview, Body } from "@components"
export default function SearchPage() {
    return (
        <div className="mx-32 flex gap-7 mt-14">
            <ShowingReview />
            <div className="w-40 h-[600px] bg-grey-400"></div>
        </div>
    )
}
