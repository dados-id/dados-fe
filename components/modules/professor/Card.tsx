import { Body, Header, Button } from "@components"
import { Professor } from "@models"
import Link from "next/link"
import { RatingCard } from "@components"

type CardProps = {
    profData: Professor
    className?: string
}

export const Card = ({ profData, className }: CardProps) => {
    return (
        <div
            className={`w-full h-full border border-black rounded-3xl shadow-lg grid grid-cols-5 items-center gap-4 bg-white p-8 ${className}`}
        >
            <div className="grid grid-cols-2 text-center">
                <RatingCard
                    rating={profData.rating}
                    className="col-span-2 justify-center"
                />

                <div className="flex flex-col items-center justify-center">
                    <Header preset="h3">{profData.wouldTakeAgain}</Header>
                    <Body preset="p3" className="w-2/3">
                        Ingin ambil lagi
                    </Body>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Header preset="h3">{profData.levelOfDifficulty}</Header>
                    <Body preset="p3" className="w-2/3">
                        Tingkat kesulitan
                    </Body>
                </div>
            </div>
            <div className="flex flex-row col-span-4 gap-4">
                <div className="w-1 rounded-full  bg-grey-200"></div>
                <div className="flex flex-col ">
                    <Header preset="h3">
                        {profData.firstName} {profData.lastName}
                    </Header>
                    <Body preset="p2">
                        Dosen di{" "}
                        <Link href="">{profData.facultyName} Faculty</Link> at{" "}
                        <Link href="">{profData.schoolName}</Link>
                    </Body>
                    <div className="flex flex-row gap-4">
                        <Button preset="primary">
                            Rate {profData.firstName} {profData.lastName}
                        </Button>
                        <Button preset="secondary">
                            Saya {profData.firstName} {profData.lastName}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
