import { Body, Header } from "@components"
import Logo from "public/logo_white.svg"

export const Footer = () => {
    return (
        <div className="w-full h-36 tablet:h-72 bg-cobalt flex flex-col justify-center px-8 desktop:px-24">
            <div className="bg-white mobile:h-1 tablet:h-1.5"></div>
            {/* Desktop and Tablet */}
            <div className="flex flex-row justify-between items-end text-white tablet:mt-8">
                {/* Left part */}
                <div className="w-3/5 hidden tablet:flex flex-row items-center justify-center gap-5">
                    <Logo className="w-40"/>
                    <div className="">
                        <Header preset="h4">dados</Header>
                        <Body preset="p2">
                            A platform for assessing lecturer’s performance
                            objectively with affirmations from students who related
                            lecturers have taught—a platform from students for
                            students.
                        </Body>
                    </div>

                </div>
                {/* Right part */}
                <div className="text-center tablet:text-right">
                    <Header preset="h2" className="block tablet:hidden">dados</Header>
                    <Header preset="h5" className="">
                        © 2023 Dados Indonesia. All Rights Reserved
                    </Header>
                </div>
            </div>

        </div>
    )
}
