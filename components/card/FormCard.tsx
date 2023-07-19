import { Body, Button, Header } from "@components"
export const FormCard = () => {
    return (
        <div className="w-3/4 desktop:h-full tablet:h-[106px] mobile:h-[113px] border border-grey-600 py-20 flex flex-col items-center desktop:rounded-3xl mobile:rounded-xl justify-center desktop:gap-4 tablet:gap-3 mobile:gap-4">
            <Header preset="h1">Add A School 🏫</Header>
            <Body preset="p2">
                Gunakan search-bar di atas untuk memastikan bahwa sekolah yang
                anda masukan tidak tersedia
            </Body>
        </div>
    )
}
