import { LandingText } from "@components"
import LandingPatternLeft from "@images/img_landing_pattern_left.svg"
import LandingPatternRight from "@images/img_landing_pattern_right.svg"
import BuildingImage from "@images/img_building.svg"
export default function Home() {
    return (
        <div className="desktop:h-screen ">
            <LandingPatternLeft className="absolute  desktop:w-full -z-10" />
            <LandingPatternRight className="absolute  -z-10 right-0" />

            <div className="flex justify-center">
                <div className="h-[90px] w-[970px] bg-grey-600 mt-7"></div>
            </div>
            <div className="relative">
                <LandingText />
                <BuildingImage className="absolute desktop:right-20 desktop:-top-20 wide:right-60 wide:-top-28" />
            </div>
        </div>
    )
}
