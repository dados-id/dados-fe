import MaleIcon from "@icons/ic_male.svg"
import BookmarkAddIcon from "@icons/ic_bookmark_add.svg"
import BookmarkIcon from "@icons/ic_bookmark.svg"
import { Body } from "components/typography"
import { RatingCard } from "./RatingCard"
import { useState } from "react"

type ProfessorQueryCardProps = {
    name: string
    university: string
    faculty: string
    rating: number
}

export const ProfessorQueryCard = ({
    name,
    university,
    faculty,
    rating,
}: ProfessorQueryCardProps) => {
    // const [isBookmark, setIsBookmark] = useState<boolean>(false)
    return (
        <div className="w-full h-24 flex justify-between border-2 border-grey-400 rounded-xl p-4">
            <div className="flex gap-2 items-center">
                <MaleIcon />
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
    )
}
