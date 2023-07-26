import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "@components"
import { TopTags } from "@components"
import { CoursesTaught } from "@components"
import { RatingDistribution } from "@components"
import { Reviews } from "@components"
import { Body } from "@components"
import { Professor } from "@models"

const Professor = () => {
    const router = useRouter()
    const slug = router.query.slug
    // const [data, setData] = useState({
    //     id: 1786,
    //     firstName: "JaKWUrQPVRQBlHk",
    //     lastName: "qJQzOvWDZkDgqfw",
    //     rating: "2.0",
    //     totalReview: 1,
    //     wouldTakeAgain: 0,
    //     levelOfDifficulty: "0.0",
    //     facultyName: "WIQQaeHihQZNMlf",
    //     schoolName: "xLmHvGNNBIfKkho",
    //     awful: 1,
    //     ok: 2,
    //     good: 3,
    //     great: 3,
    //     awesome: 3,
    //     top5Tags: ["easy", "kind", "no assignments"],
    //     courses: ["CS2310", "CS2311", "CS2312", "CS2313"],
    // })
    const [profData, setProfData] = useState<Professor | any>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios
            .get(`/api/professor/${slug}`)
            .then((response) => {
                setProfData(response.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className="flex flex-col items-center justify-center p-16">
            <div className="grid grid-cols-8 px-32 gap-12">
                <div className="flex gap-2 items-center">
                    <div className="p-1 bg-cobalt rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-6 h-6 fill-white"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <Body preset="p2" className="text-cobalt font-semibold">
                        Back
                    </Body>
                </div>
                <Card profData={profData} className="col-span-8"></Card>
                <TopTags
                    tags={profData?.topTags}
                    className="col-span-3"
                ></TopTags>
                <RatingDistribution
                    excellent={profData?.excellent}
                    good={profData?.good}
                    fair={profData?.fair}
                    poor={profData?.poor}
                    terrible={profData?.terrible}
                    totalReview={profData?.totalReview}
                    className="col-span-4 row-span-2"
                />
                <CoursesTaught
                    courses={profData?.courses}
                    className="col-span-3"
                ></CoursesTaught>
                <Reviews
                    allCourses={profData?.courses}
                    reviews={[]}
                    className="col-span-7"
                />
            </div>
        </div>
    )
}

export default Professor
