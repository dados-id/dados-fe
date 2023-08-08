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
            className={`w-full h-full border rounded-3xl shadow-lg grid grid-cols-7 items-center gap-4 bg-white p-8 ${className}`}
        >
            <div className="grid grid-cols-2 text-center">
                <RatingCard
                    // rating="4.8"
                    preset="h2"
                    size="lg"
                    rating={profData.rating}
                    className="col-span-2 justify-center"
                />

                <div className="flex flex-col items-center justify-center">
                    {/* <Header preset="decorative" className="font-bold">{profData.wouldTakeAgain}%</Header> */}
                    <Header preset="h3">86%</Header>
                    <Body preset="p3" className="w-full">
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
            <div className="flex flex-row col-span-6 gap-4 h-full">
                <div className="w-1 rounded-full  bg-grey-200"></div>
                <div className="flex flex-col justify-between">
                    <div>
                    <Header preset="h3">
                        {profData.firstName} {profData.lastName}
                    </Header>
                    <Body preset="p2">
                        Dosen di{" "}
                        <Link href="" className="underline underline-offset-2 font-bold">{profData.facultyName} Faculty</Link> at{" "}
                        <Link href="" className="underline underline-offset-2 font-bold">{profData.schoolName}</Link>
                    </Body>
                    </div>
                    <div className="flex flex-row gap-4 mt-2">
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
