import { Header, Body } from "@components"
import SmilingFace from "@icons/ic_smiling_face.svg"
import ThumbsUp from "@icons/ic_thumbs_up.svg"
import FingerLove from "@icons/ic_finger_love.svg"
import ThumbsDown from "@icons/ic_thumbs_down.svg"
export const LandingText = () => {
    return (
        <div className="mt-[10%]">
            <div className="flex flex-col items-center">
                <Body preset="p2">
                    <span className="font-bold">200</span> lecturers in
                    <span className="font-bold"> 40</span> universities are
                    well-rated
                </Body>
                <Header preset="h2" className="flex items-center gap-2 ">
                    Now, it&apos;s easiers
                    <SmilingFace />
                    to
                </Header>
                <Header preset="h2" className="flex items-center gap-2 ">
                    rate
                    <div className="flex">
                        <ThumbsUp /> <FingerLove /> <ThumbsDown />
                    </div>
                    your lecturer
                </Header>
            </div>
        </div>
    )
}
