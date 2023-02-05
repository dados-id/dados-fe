import { useRouter } from "next/router"
import { ShowingReview, Body } from "@components"
import { useEffect } from "react"
export default function SearchPage() {
    const router = useRouter()
    const { slug } = router.query
    useEffect(() => {
        if (router.query.professor) {
        }
    }, [router.query.professor, router.query.university])

    return (
        <div className="desktop::mx-32 tablet:mx-10 mobile:mx-5 flex gap-7 mt-14 min-h-[70vh]">
            <ShowingReview
                slug={slug?.toString()}
                isProf={
                    router.query.professor
                        ? router.query.professor === "true"
                        : false
                }
                name={router.query.university?.toString()}
            />
        </div>
    )
}
