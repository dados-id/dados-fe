import { Body, Button } from "@components"
export const NoLecturerCard = () => {
    return (
        <div className="w-full desktop:h-[118px] tablet:h-[106px] mobile:h-[113px] border border-grey-600 py-20 flex flex-col items-center desktop:rounded-lg mobile:rounded-xl justify-center desktop:gap-4 tablet:gap-3 mobile:gap-4">
            <Body preset="p2">
                Tidak menemukan dosen yang Anda cari?
            </Body>
            <Button preset="primary">Tambahkan Dosen</Button>
        </div>
    )
}
