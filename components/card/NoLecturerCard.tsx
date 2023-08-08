import { Body, Button } from "@components"
import Link from "next/link"
import { FC } from "react"
export const NoLecturerCard:FC<{isProf:boolean}> = ({isProf}) => {
    return (
        <div className="w-full desktop:h-[118px] tablet:h-[106px] mobile:h-[113px] py-20 flex flex-col items-center desktop:rounded-lg mobile:rounded-xl justify-center desktop:gap-4 tablet:gap-3 mobile:gap-4">
        {/* <div className="w-full desktop:h-[118px] tablet:h-[106px] mobile:h-[113px] border border-grey-600 py-20 flex flex-col items-center desktop:rounded-lg mobile:rounded-xl justify-center desktop:gap-4 tablet:gap-3 mobile:gap-4"> */}
            <Body preset="p2">
                Tidak menemukan {isProf ? "dosen" : "universitas" } yang Anda cari?
            </Body>
            <Link href={isProf ? "/addprof" : "/adduni"}>
            <Button preset="primary">Tambahkan {isProf ? "Dosen" : "Universitas" }</Button>
            </Link>
        </div>
    )
}
