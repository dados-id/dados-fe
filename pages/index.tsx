import { LandingText, Button } from "@components"
import { useState } from "react"
import LandingPatternLeft from "@images/img_landing_pattern_left.svg"
import LandingPatternRight from "@images/img_landing_pattern_right.svg"
import LandingPatternLeftProf from "@images/img_landing_pattern_left_prof.svg"
import LandingPatternRightProf from "@images/img_landing_pattern_right_prof.svg"
import BuildingImage from "@images/img_building.svg"
import ProfessorImage from "@images/img_professor.svg"

export default function Home() {
    const [isProf, setIsProf] = useState<boolean>(false)
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
                <LandingText />
                {!isProf ? (
                    <BuildingImage className="absolute desktop:right-20 desktop:-top-20 wide:right-60 wide:-top-28 animate-fade-in" />
                ) : (
                    <ProfessorImage className="absolute desktop:right-20 desktop:-top-28 wide:right-60 wide:-top-36 animate-fade-in" />
                )}
            </div>
            <Button preset="primary" onClick={() => setIsProf(!isProf)}>
                Change
            </Button>
        </div>
    )
}
