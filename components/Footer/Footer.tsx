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
                    {/* <Logo className="w-100 desktop:hidden"/> */}
                    <div className="">
                        <Header preset="h4" className="block">dados</Header>
                        {/* <Header preset="h2" className="block desktop:hidden">dados</Header> */}
                        <Body preset="p2">
                        Sebuah platform untuk menilai kinerja dosen secara objektif dengan pengakuan dari mahasiswa yang pernah belajar dengan dosen tersebut. Sebuah platform dari mahasiswa untuk mahasiswa.
                        </Body>
                    </div>
                </div>
                {/* Right part */}
                <div className="text-center tablet:text-right">
                    <Header preset="h2" className="block tablet:hidden">dados</Header>
                    <Header preset="h5" className="">
                        © 2023 Dados Indonesia
                    </Header>
                </div>
            </div>

        </div>
    )
}
