import { Body, Button, QueryCard } from "@components"
import { useEffect, useState } from "react"
import { Select } from "@chakra-ui/react"
import { ChevronDownIcon, ArrowDownIcon } from "@heroicons/react/20/solid"
import axios from "axios"
import NotFoundImage from "@images/img_not_found.svg"
import { Professor, University } from "@models"
import Link from "next/link"
type ShowingReviewProps = {
    slug?: string
    isProf: boolean
    name?: string
}
export const ShowingReview = ({ slug, isProf, name }: ShowingReviewProps) => {
    const [data, setData] = useState<any>()
    const [page, setPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (isProf) {
            axios
                .get(`/api/professor/search/${slug}/${page}`)
                .then((response) => {
                    setData(response.data)
                    setIsLoading(false)
                })
        } else {
            axios
                .get(`/api/university/landing/${slug}/${page}`)
                .then((response) => {
                    setData(response.data)
                    setIsLoading(false)
                })
        }
    }, [page, isProf])

    const options = [
        { label: "Green", value: "green" },
        { label: "Green-Yellow", value: "greenyellow" },
        { label: "Red", value: "red" },
        { label: "Violet", value: "violet" },
        { label: "Forest", value: "forest" },
        { label: "Tangerine", value: "tangerine" },
        { label: "Blush", value: "blush" },
        { label: "Purple", value: "purple" },
    ]
    if (isLoading) {
        return <p>loading...</p>
    }
    return (
        <div className="flex gap-7 w-full">
            {" "}
            <div className="w-full">
                {data?.length > 0 ? (
                    <>
                        <Select
                            name="faculty"
                            placeholder="Filter by faculty"
                            color={"#909090"}
                            _focus={{ color: "#000000" }}
                            icon={
                                <ChevronDownIcon className="fill-grey-600 w-3 h-2" />
                            }
                        >
                            {options.map((o, index) => (
                                <option value={o.value} key={index}>
                                    {o.label}
                                </option>
                            ))}
                        </Select>
                        <Button
                            preset="primary"
                            onClick={() => setPage(page + 1)}
                        >
                            next page
                        </Button>
                        <Body preset="p2" className="text-center py-5">
                            Showing 5 out of 100{" "}
                            {isProf ? "lecturers at" : "schools with"}{" "}
                            <span className="font-bold">
                                {isProf ? name : slug}
                            </span>
                            {!isProf && " in their name"}
                        </Body>
                        <div className="h-10 w-full pl-14 pr-20 flex justify-between rounded-lg bg-cobalt">
                            <div className="flex items-center gap-1">
                                <ArrowDownIcon className="w-4 h-4 fill-whipcream" />
                                <Body
                                    preset="p2"
                                    className="font-bold text-whipcream"
                                >
                                    Name
                                </Body>
                            </div>
                            <div className="flex items-center gap-1">
                                <ArrowDownIcon className="w-4 h-4 fill-whipcream" />
                                <Body
                                    preset="p2"
                                    className="font-bold text-whipcream"
                                >
                                    Rating
                                </Body>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 mt-5">
                            {data?.map((d: any, index: number) =>
                                isProf ? (
                                    <QueryCard
                                        isProf={isProf}
                                        key={index}
                                        rating={3.0}
                                        name={`${d.firstName} ${d.lastName}`}
                                        university={d.schoolName}
                                        faculty={d.facultyName}
                                        id={d.id}
                                    />
                                ) : (
                                    // kalo pencet card redirect ke yg sama kasih params
                                    <QueryCard
                                        isProf={isProf}
                                        key={index}
                                        rating={3.0}
                                        name={`${d.name}`}
                                        university={d.city}
                                        faculty={d.province}
                                        id={d.id}
                                    />
                                )
                            )}
                        </div>{" "}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center w-full mb-52">
                        <Body preset="p2" className="">
                            Sorry, we can’t find any{" "}
                            {isProf ? (
                                <span>
                                    lecturers at{" "}
                                    <span className="font-bold">{name}</span>
                                </span>
                            ) : (
                                <span>
                                    schools with{" "}
                                    <span className="font-bold">{slug}</span> in
                                    their name
                                </span>
                            )}
                        </Body>
                        <NotFoundImage className="mt-10" />
                        <Link href="#">
                            <Button preset="primary" className="mt-7">
                                {isProf ? "Add a lecturer" : "Add school"}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
            {data?.length > 0 && (
                <div className="w-40 h-[600px] bg-grey-400"></div>
            )}
        </div>
    )
}
