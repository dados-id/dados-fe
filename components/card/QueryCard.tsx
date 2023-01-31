import MaleIcon from "@icons/ic_male.svg"
import BookmarkAddIcon from "@icons/ic_bookmark_add.svg"
import BookmarkIcon from "@icons/ic_bookmark.svg"
import UniversityIcon from "public/assets/images/university.svg"
import { Body } from "components/typography"
import { RatingCard } from "./RatingCard"
import { useState } from "react"
import Link from "next/link"

type QueryCardProps = {
    name: string
    university: string
    faculty: string
    rating: number
    isProf: boolean
    id: number
}

export const QueryCard = ({
    name,
    university,
    faculty,
    rating,
    isProf,
    id,
}: QueryCardProps) => {
    // const [isBookmark, setIsBookmark] = useState<boolean>(false)
    return (
        <Link
            href={
                isProf
                    ? `/professor/${id}`
                    : `/search/${id}/?professor=true&university=${name}`
            }
        >
            {" "}
            <div className="w-full h-24 flex justify-between border-2 border-grey-400 rounded-xl p-4">
                <div className="flex gap-2 items-center">
                    {isProf ? <MaleIcon /> : <UniversityIcon />}
                    <div className="flex flex-col">
                        <Body preset="p1" className="font-bold text-mariana">
                            {name}
                        </Body>
                        <Body preset="p2" className="text-mariana">
                            {university}, {faculty}
                        </Body>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <RatingCard rating={rating} />
                    {/* <div className="h-10 w-[1px] bg-grey-600"></div>
                <div onClick={() => setIsBookmark(!isBookmark)}>
                    {isBookmark ? <BookmarkIcon /> : <BookmarkAddIcon />}
                </div> */}
                </div>
            </div>
        </Link>
    )
}
