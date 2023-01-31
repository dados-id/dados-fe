import { LandingText, Body, SearchBar } from "@components"
import { useState, useEffect } from "react"
import LandingPatternLeft from "@images/img_landing_pattern_left.svg"
import LandingPatternRight from "@images/img_landing_pattern_right.svg"
import LandingPatternLeftProf from "@images/img_landing_pattern_left_prof.svg"
import LandingPatternRightProf from "@images/img_landing_pattern_right_prof.svg"
import BuildingImage from "@images/img_building.svg"
import ProfessorImage from "@images/img_professor.svg"
import { useRouter } from "next/router"
import Link from "next/link"
export default function Home() {
    const [isProf, setIsProf] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        if (router.query.university) {
            setIsProf(true)
        }
    }, [router.query.university, router.query.id])
    return (
        <div className="desktop:h-screen ">
            {!isProf ? (
                <>
                    <LandingPatternLeft className="absolute  desktop:w-full -z-10 animate-fade-in" />
                    <LandingPatternRight className="absolute  -z-10 right-0 animate-fade-in" />
                </>
            ) : (
                <>
                    <LandingPatternLeftProf className="absolute  desktop:w-full -z-10 top-44 animate-fade-in" />
                    <LandingPatternRightProf className="absolute  -z-10 right-0 animate-fade-in" />
                </>
            )}

            <div className="flex justify-center">
                <div className="h-[90px] w-[970px] bg-grey-600 mt-7"></div>
            </div>
            <div className="relative">
                <LandingText
                    isProfessor={isProf}
                    universityName={router.query.university?.toString()}
                />
                {!isProf ? (
                    <BuildingImage className="absolute desktop:right-20 desktop:-top-40 wide:right-60 wide:-top-28 animate-fade-in" />
                ) : (
                    <ProfessorImage className="absolute desktop:right-20 desktop:-top-32 wide:right-60 wide:-top-36 animate-fade-in" />
                )}
            </div>

            <div className="mx-28 mt-4">
                <SearchBar isProf={isProf} setIsProf={setIsProf} />
            </div>
            {isProf && router.query.university && (
                <div className="flex justify-center items-center mt-5 gap-5">
                    <Link
                        href={`/search/${router.query.id?.toString()}?professor=true&university=${router.query.university?.toString()}`}
                    >
                        {" "}
                        <Body
                            preset="p2"
                            className="underline text-cobalt font-bold"
                        >
                            I want to find all lecturer from this school
                        </Body>
                    </Link>
                </div>
            )}
        </div>
    )
}
