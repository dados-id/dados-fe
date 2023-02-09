import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"
import TopTags from "./TopTags";
import CoursesTaught from "./CoursesTaught";
import RatingDistribution from "./RatingDistribution"
import Reviews from "./Reviews"

type ProfData = {
    "totalReview": number | undefined
    "rating": string | undefined
    "wouldTakeAgain": number | undefined
    "levelOfDifficulty": string
    "awful": number | undefined
    "ok": number | undefined
    "good": number | undefined
    "great": number | undefined
    "awesome": number | undefined
    "top5Tags": string[] | undefined
    "courses": any[] | undefined
}


const Professor = () => {
    const router = useRouter();
    const slug = router.query.slug;
    const [data, setData] = useState({
        "id": 1786,
        "firstName": "JaKWUrQPVRQBlHk",
        "lastName": "qJQzOvWDZkDgqfw",
        "rating": "2.0",
        "totalReview": 1,
        "wouldTakeAgain": 0,
        "levelOfDifficulty": "0.0",
        "facultyName": "WIQQaeHihQZNMlf",
        "schoolName": "xLmHvGNNBIfKkho",
        "awful": 1,
        "ok": 2,
        "good": 3,
        "great": 3,
        "awesome": 3,
        "top5Tags": ["easy", "kind", "no assignments"],
        "courses": ["CS2310", "CS2311", "CS2312", "CS2313"]
    })
    const [profData, setProfData] = useState<ProfData>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // axios
        //     .get(`../api/professor/${slug}`)
        //     .then((response) => {
        //         setProfData(response.data);
        //         setIsLoading(false);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        setProfData(data)
        setIsLoading(false);

    }, [])
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className="flex flex-col items-center justify-center p-16">
            {JSON.stringify(profData)}
            <div className="grid grid-cols-8 px-32 gap-12">
                <Card profData={data} className="col-span-8"></Card>
                <TopTags tags={profData?.top5Tags} className="col-span-3"></TopTags>
                <RatingDistribution
                    awesome={profData?.awesome}
                    great={profData?.great}
                    good={profData?.good}
                    ok={profData?.ok}
                    awful={profData?.awful}
                    totalReview={profData?.totalReview} 
                    className="col-span-4 row-span-2"
                    />
                <CoursesTaught courses={profData?.courses} className="col-span-3"></CoursesTaught>
                <Reviews reviews={[]} className="col-span-7"/>
            </div>
        </div>
    )
}

export default Professor;