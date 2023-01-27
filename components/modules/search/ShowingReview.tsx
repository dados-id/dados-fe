import { Body, ProfessorQueryCard } from "@components"

import { Select } from "@chakra-ui/react"
import { ChevronDownIcon, ArrowDownIcon } from "@heroicons/react/20/solid"
export const ShowingReview = () => {
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
                icon={<ChevronDownIcon className="fill-grey-600 w-3 h-2" />}
            >
                {options.map((o, index) => (
                    <option value={o.value} key={index}>
                        {o.label}
                    </option>
                ))}
            </Select>
            <Body preset="p2" className="text-center py-5">
                Showing 5 out of 100 lecturers at{" "}
                <span className="font-bold">Institut Teknologi Bandung</span>
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
                <ProfessorQueryCard />
                <ProfessorQueryCard />
                <ProfessorQueryCard />
            </div>
        </div>
    )
}
