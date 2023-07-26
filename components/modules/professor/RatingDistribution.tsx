import { Body, Header, Button, Chip } from "@components"
import Link from "next/link"
import { Tag, TagLabel, TagLeftIcon, Icon } from "@chakra-ui/react"

type RatingDistributionProps = {
    excellent: number | undefined
    good: number | undefined
    fair: number | undefined
    poor: number | undefined
    terrible: number | undefined
    totalReview: number | undefined
    className?: string
}

export const RatingDistribution = ({
    excellent,
    good,
    fair,
    poor,
    terrible,
    totalReview,
    className,
}: RatingDistributionProps) => {
    const widthRatio = (x: number) => {
        if (totalReview) {
            return `${(x / totalReview) * 21}em`
        }
    }

    return (
        <div className={`h-full flex flex-col justify-between ${className}`}>
            <Header preset="h4">Rating Distribution</Header>
            <Body preset="p2">Based on {totalReview} ratings</Body>
            <div className="flex flex-col justify-between h-full w-full rounded-xl gap-6 p-4 border border-grey-200">
                <div className="flex justify-between items-center">
                    <Body preset="p2" className="w-20">
                        Excellent
                    </Body>
                    <Header preset="h6" className="w-2">
                        5
                    </Header>
                    <div className="relative w-[21rem] h-6 bg-grey-400 rounded-lg">
                        <div
                            className={`${
                                excellent
                                    ? `w-[${widthRatio(excellent)}]`
                                    : "w-0"
                            } h-6 bg-ultra-marine rounded-lg`}
                        ></div>
                    </div>
                    <Header preset="h6" className="w-2">
                        {excellent}
                    </Header>
                </div>
                <div className="flex justify-between items-center">
                    <Body preset="p2" className="w-20">
                        Good
                    </Body>
                    <Header preset="h6" className="w-2">
                        4
                    </Header>
                    <div className="relative w-[21rem] h-6 bg-grey-400 rounded-lg">
                        <div
                            className={`${
                                good ? `w-[${widthRatio(good)}]` : "w-0"
                            } h-6 bg-ultra-marine rounded-lg`}
                        ></div>
                    </div>
                    <Header preset="h6" className="w-2">
                        {good}
                    </Header>
                </div>
                <div className="flex justify-between items-center">
                    <Body preset="p2" className="w-20">
                        Fair
                    </Body>
                    <Header preset="h6" className="w-2">
                        3
                    </Header>
                    <div className="relative w-[21rem] h-6 bg-grey-400 rounded-lg">
                        <div
                            className={`${
                                fair ? `w-[${widthRatio(fair)}]` : "w-0"
                            } h-6 bg-ultra-marine rounded-lg`}
                        ></div>
                    </div>
                    <Header preset="h6" className="w-2">
                        {fair}
                    </Header>
                </div>
                <div className="flex justify-between items-center">
                    <Body preset="p2" className="w-20">
                        Poor
                    </Body>
                    <Header preset="h6" className="w-2">
                        2
                    </Header>
                    <div className="relative w-[21rem] h-6 bg-grey-400 rounded-lg">
                        <div
                            className={`${
                                poor ? `w-[${widthRatio(poor)}]` : "w-0"
                            } h-6 bg-ultra-marine rounded-lg`}
                        ></div>
                    </div>
                    <Header preset="h6" className="w-2">
                        {poor}
                    </Header>
                </div>
                <div className="flex justify-between items-center">
                    <Body preset="p2" className="w-20">
                        Terrible
                    </Body>
                    <Header preset="h6" className="w-2">
                        1
                    </Header>
                    <div className="relative w-[21rem] h-6 bg-grey-400 rounded-lg">
                        <div
                            className={`${
                                terrible ? `w-[${widthRatio(terrible)}]` : "w-0"
                            } h-6 bg-ultra-marine rounded-lg`}
                        ></div>
                    </div>
                    <Header preset="h6" className="w-2">
                        {terrible}
                    </Header>
                </div>
            </div>
        </div>
    )
}
