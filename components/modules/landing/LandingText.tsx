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
        <div className="desktop:mt-[12%] tablet:mt-[25%] mobile:mt-[35%]">
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
                            className="flex tablet:flex-row mobile:flex-col items-center tablet:gap-2 mobile:gap-1 font-normal "
                        >
                            <div className="flex items-center tablet:gap-2 mobile:gap-1">
                                Find your
                                <span className="font-bold">lecturer</span>
                                <LecturerIcon className="tablet:scale-100 mobile:scale-75" />
                            </div>
                            <div className="flex items-center tablet:gap-2 mobile:gap-1">
                                {!universityName && "to get started"}
                                {!universityName && (
                                    <BoltIcon className="tablet:scale-100 mobile:scale-75" />
                                )}
                            </div>
                        </Header>
                        {universityName && (
                            <Header
                                preset="h2"
                                className="flex items-center tablet:gap-2 mobile:gap-1 font-normal"
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
                            className="flex tablet:flex-row mobile:flex-col items-center tablet:gap-2 font-normal "
                        >
                            <div className="flex items-center tablet:gap-2 mobile:gap-1">
                                Enter your
                                <span className="font-bold">school</span>
                                <SchoolIcon className="tablet:scale-100 mobile:scale-75" />
                            </div>
                            <div className="flex items-center tablet:gap-2 mobile:gap-1">
                                {" "}
                                to get started{" "}
                                <BoltIcon className="tablet:scale-100 mobile:scale-75" />
                            </div>
                        </Header>
                    </>
                )}
            </div>
        </div>
    )
}
