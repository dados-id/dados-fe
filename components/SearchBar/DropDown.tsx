import { Body } from "@components"
import UniversityIcon from "public/assets/images/university.svg"
import Lecturer from "public/assets/images/lecturer.svg"
import { University, Professor } from "@models"
import { useRouter } from "next/router"
interface searchResProps {
    data: any
    isProf: boolean
    search: string
    setInputVal: (inputVal: string) => void
    onInputHandler: () => void
}

export const Dropdown = ({
    data,
    isProf,
    search,
    setInputVal,
    onInputHandler,
}: searchResProps) => {
    const router = useRouter()
    const onDropdownClick = () => {
        onInputHandler()
        setInputVal("")
    }
    return (
        <div className="px-4">
            {data.length > 0 ? (
                isProf ? (
                    data.map((prof: Professor, index: number) => (
                        <div
                            className="flex justify-between items-center"
                            key={index}
                        >
                            <div className="flex gap-2 items-center">
                                <Lecturer />
                                <Body preset="p2">{prof.firstName}</Body>
                            </div>
                            <Body preset="p2">
                                {prof.schoolName}, {prof.facultyName}
                            </Body>
                        </div>
                    ))
                ) : (
                    data.map((uni: University, index: number) => (
                        <div
                            className="flex justify-between items-center"
                            key={index}
                            onClick={() => {
                                onDropdownClick(),
                                    router.push({
                                        pathname: "/",
                                        query: {
                                            university: uni.name,
                                            id: uni.id,
                                        },
                                    })
                            }}
                        >
                            <div className="flex gap-2 items-center">
                                <UniversityIcon />
                                <Body preset="p2">{uni.name}</Body>
                            </div>
                            <Body preset="p2">
                                {uni.city}, {uni.province}
                            </Body>
                        </div>
                    ))
                )
            ) : (
                <div className="flex justify-center items-center">
                    <Body preset="p2" className="text-danger">
                        No matching results for {search}
                    </Body>
                </div>
            )}
        </div>
    )
}
