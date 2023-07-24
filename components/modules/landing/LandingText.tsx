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
                    Lebih dari <span className="font-bold">200 </span> 
                    dosen di <span className="font-bold"> 40 </span>
                    universitas
                </Body>
                {isProfessor ? (
                    <>
                        <Header
                            preset="h2"
                            className="flex tablet:flex-row mobile:flex-col items-center tablet:gap-2 mobile:gap-1 font-normal "
                        >
                            <div className="flex items-center tablet:gap-2 mobile:gap-1">
                                Cari
                                <span className="font-bold">dosen</span>
                                <LecturerIcon className="tablet:scale-100 mobile:scale-75" />
                            </div>
                            <div className="flex items-center tablet:gap-2 mobile:gap-1">
                                {!universityName && "untuk mulai"}
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
                                di
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
                                Masukkan 
                                <span className="font-bold">universitas</span>
                                <SchoolIcon className="tablet:scale-100 mobile:scale-75" />
                            </div>
                            <div className="flex items-center tablet:gap-2 mobile:gap-1">
                                {" "}
                                untuk mulai{" "}
                                <BoltIcon className="tablet:scale-100 mobile:scale-75" />
                            </div>
                        </Header>
                    </>
                )}
            </div>
        </div>
    )
}
