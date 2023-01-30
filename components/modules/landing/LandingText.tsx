import { Header, Body } from "@components"
import SchoolIcon from "@icons/ic_school.svg"
import BoltIcon from "@icons/ic_bolt.svg"
import LecturerIcon from "@icons/ic_lecturer.svg"
export const LandingText = ({
    isProfessor,
    universityName,
}: {
    isProfessor: boolean
    universityName?: string
}) => {
    return (
        <div className="mt-[12%]">
            <div className="flex flex-col items-center">
                <Body preset="p2">
                    <span className="font-bold">200</span> lecturers in
                    <span className="font-bold"> 40</span> universities are
                    well-rated
                </Body>
                {isProfessor ? (
                    <>
                        <Header
                            preset="h2"
                            className="flex items-center gap-2 font-normal "
                        >
                            Find your
                            <span className="font-bold">lecturer</span>
                            <LecturerIcon />
                            {!universityName && "to get started"}
                        </Header>
                        {universityName && (
                            <Header
                                preset="h2"
                                className="flex items-center gap-2 font-normal"
                            >
                                at
                                <span className="font-bold">
                                    {universityName}
                                </span>
                                <SchoolIcon />
                            </Header>
                        )}
                    </>
                ) : (
                    <>
                        <Header
                            preset="h2"
                            className="flex items-center gap-2 font-normal "
                        >
                            Enter your <span className="font-bold">school</span>
                            <SchoolIcon /> to get started <BoltIcon />
                        </Header>
                    </>
                )}
            </div>
        </div>
    )
}
