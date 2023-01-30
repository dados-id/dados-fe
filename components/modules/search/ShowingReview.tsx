import { Body, Button, ProfessorQueryCard } from "@components"
import { useEffect, useState } from "react"
import { Select } from "@chakra-ui/react"
import { ChevronDownIcon, ArrowDownIcon } from "@heroicons/react/20/solid"
import axios from "axios"
import { Professor } from "@models"
type ShowingReviewProps = {
    slug?: string
}
export const ShowingReview = ({ slug }: ShowingReviewProps) => {
    const [professors, setProfessor] = useState<Professor[]>()
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        axios.get(`/api/professor/landing/${slug}/${page}`).then((response) => {
            setProfessor(response.data)
        })
    }, [page])

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
    return (
        <div className="w-full">
            <Select
                name="faculty"
                placeholder="Filter by faculty"
                color={"#909090"}
                _focus={{ color: "#000000" }}
                icon={<ChevronDownIcon className="fill-grey-600 w-3 h-2" />}
            >
                {options.map((o, index) => (
                    <option value={o.value} key={index}>
                        {o.label}
                    </option>
                ))}
            </Select>
            <Button preset="primary" onClick={() => setPage(page + 1)}>
                next page
            </Button>
            <Body preset="p2" className="text-center py-5">
                Showing 5 out of 100 lecturers at{" "}
                <span className="font-bold">{slug}</span>
            </Body>
            <div className="h-10 w-full pl-14 pr-20 flex justify-between rounded-lg bg-cobalt">
                <div className="flex items-center gap-1">
                    <ArrowDownIcon className="w-4 h-4 fill-whipcream" />
                    <Body preset="p2" className="font-bold text-whipcream">
                        Name
                    </Body>
                </div>
                <div className="flex items-center gap-1">
                    <ArrowDownIcon className="w-4 h-4 fill-whipcream" />
                    <Body preset="p2" className="font-bold text-whipcream">
                        Rating
                    </Body>
                </div>
            </div>
            <div className="flex flex-col gap-5 mt-5">
                {professors?.map((prof, index) => (
                    <ProfessorQueryCard
                        key={index}
                        rating={3.0}
                        name={`${prof.firstName} ${prof.lastName}`}
                        university={prof.schoolName}
                        faculty={prof.facultyName}
                    />
                ))}
            </div>
        </div>
    )
}
