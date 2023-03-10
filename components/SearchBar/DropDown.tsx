import { Body } from "@components"
import UniversityIcon from "public/assets/images/university.svg"
import Lecturer from "public/assets/images/lecturer.svg"
import { University, Professor } from "@models"
import { useRouter } from "next/router"
import { useSetUniNameContext } from "@context"
import Link from "next/link"
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
        <div className="tablet:px-4 flex flex-col tablet:gap-2 mobile:gap-1 mobile:px-2">
            {data.length > 0 ? (
                isProf ? (
                    data.map((prof: Professor, index: number) => (
                        <Link href={`/professor/${prof.id}`} key={index}>
                            <div
                                className="flex tablet:flex-row mobile:flex-col tablet:justify-between tablet:items-center mobile"
                                key={index}
                            >
                                <div className="flex tablet:gap-2 mobile:gap-1 items-center">
                                    <Lecturer />
                                    <Body preset="p2">{prof.firstName}</Body>
                                </div>
                                <Body preset="p2" className="ml-7">
                                    {prof.schoolName}, {prof.facultyName}
                                </Body>
                            </div>
                        </Link>
                    ))
                ) : (
                    data.map((uni: University, index: number) => (
                        <div
                            className="flex tablet:flex-row mobile:flex-col tablet:justify-between tablet:items-center "
                            key={index}
                            onClick={() => {
                                localStorage.setItem("uniName", uni.name)
                                localStorage.setItem("uniId", uni.id.toString())
                                onDropdownClick(), router.push("/")
                            }}
                        >
                            <div className="flex tablet:gap-2 mobile:gap-1 items-center">
                                <UniversityIcon />
                                <Body preset="p2">{uni.name}</Body>
                            </div>
                            <Body preset="p2" className="ml-7">
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
