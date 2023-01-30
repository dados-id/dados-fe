import { useRouter } from "next/router"
import { ShowingReview, Body } from "@components"
export default function SearchPage() {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div className="mx-32 flex gap-7 mt-14">
            <ShowingReview slug={slug?.toString()} />
            <div className="w-40 h-[600px] bg-grey-400"></div>
        </div>
    )
}
