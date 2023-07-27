import { Body, Button, Header } from "@components"

type FormCardProps = {
    isProf: boolean
}

export const FormCard = ({ isProf }: FormCardProps) => {
    return (
        <div
            className={`
        mobile:w-11/12
        tablet:w-3/4
        desktop:w-2/3
        wide:w-3/5
        
        mobile:h-[100px]
        tablet:h-[125px]
        desktop:h-[200px]

        border
        border-grey-600
        py-20
        flex
        flex-col
        items-center
        desktop:rounded-3xl
        mobile:rounded-xl
        justify-center
        desktop:gap-4
        tablet:gap-1
        mobile:gap-1
        bg-cover
        bg-center
        drop-shadow-2xl
    `}
            style={{
                backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2A2c0jH84IKq6Uuo678q-_RLjYSOek5Shyg&usqp=CAU)",
            }}
        >
            {isProf ? (
                <>
                    <Header preset="h2" className="w-5/6 text-center">
                        Add A Lecturer 👨🏻‍🦳
                    </Header>
                    <Body
                        preset="p2"
                        className="tablet:text-[0.75rem] mobile:text-[0.5rem] w-5/6 text-center"
                    >
                        Gunakan search-bar di atas untuk memastikan bahwa
                        Pengajar yang anda masukan tidak tersedia
                    </Body>
                </>
            ) : (
                <>
                    <Header preset="h2" className="w-5/6 text-center">
                        Add A School 🏫
                    </Header>
                    <Body preset="p2" className="w-5/6 text-center">
                        Gunakan search-bar di atas untuk memastikan bahwa
                        sekolah yang anda masukan tidak tersedia
                    </Body>
                </>
            )}
        </div>
    )
}
