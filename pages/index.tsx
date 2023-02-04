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
        <div className="desktop:h-screen tablet:h-[75vh] mobile:h-screen ">
            {!isProf ? (
                <>
                    <LandingPatternLeft className="absolute  desktop:w-full desktop:scale-100 tablet:scale-90 mobile:scale-50 desktop:top-0 tablet:bottom-64 mobile:bottom-20 desktop:left-0 tablet:-left-10 mobile:-left-40 -z-10 animate-fade-in" />
                    <LandingPatternRight className="absolute  -z-10 right-0 animate-fade-in desktop:scale-100 tablet:scale-90 mobile:scale-50 desktop:right-0 tablet:-right-10 mobile:-right-48 tablet:top-0 mobile:-top-12" />
                </>
            ) : (
                <>
                    <LandingPatternLeftProf className="absolute  desktop:w-full desktop:scale-100 tablet:scale-90 mobile:scale-50 -z-10 desktop:top-44 tablet:bottom-72 mobile:bottom-28 mobile:-left-40 desktop:left-0 tablet:-left-10 animate-fade-in" />
                    <LandingPatternRightProf className="absolute  -z-10 right-0 animate-fade-in desktop:scale-100 tablet:scale-90 mobile:scale-50 desktop:right-0 tablet:-right-10 mobile:-right-48 mobile:-top-12" />
                </>
            )}

            <div className="flex justify-center">
                <div className="tablet:h-[90px] mobile:h-[50px] w-full desktop:mx-[155px] tablet:mx-5 mobile:mx-[30px] bg-grey-600 tablet:mt-7 mobile:mt-4"></div>
            </div>
            <div className="relative">
                <LandingText
                    isProfessor={isProf}
                    universityName={router.query.university?.toString()}
                />
                {!isProf ? (
                    <BuildingImage className="absolute desktop:right-20 tablet:right-10 mobile:-right-14 desktop:-top-40 tablet:-top-52 mobile:-top-44 desktop:scale-100 tablet:scale-75 mobile:scale-[0.45] wide:right-60 wide:-top-28 animate-fade-in" />
                ) : (
                    <ProfessorImage className="absolute desktop:right-20 tablet:right-10 mobile:-right-14 desktop:-top-32 tablet:-top-56 mobile:-top-48 desktop:scale-100 tablet:scale-75 mobile:scale-[0.38] wide:right-60 wide:-top-36 animate-fade-in" />
                )}
            </div>

            <div className="desktop:mx-28 tablet:mx-11 mobile:mx-5 desktop:mt-4 tablet:mt-6 mobile:mt-3">
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
