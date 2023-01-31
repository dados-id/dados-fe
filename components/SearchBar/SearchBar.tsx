import { Dropdown, Button, CustomListBox, Body } from "@components"
import { useState, useEffect } from "react"
import { University, Professor } from "@models"
import { useRouter } from "next/router"
import Link from "next/link"
import axios from "axios"

type SearchBarProps = {
    isProf: boolean
    setIsProf: (isProf: boolean) => void
}
export const SearchBar = ({ isProf, setIsProf }: SearchBarProps) => {
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)
    const [data, setData] = useState<University[] | Professor[]>()
    const [inputVal, setInputVal] = useState("")

    const router = useRouter()
    let timer: NodeJS.Timeout
    const waitTime = 500
    // let event
    useEffect(() => {
        if (inputVal) {
            if (isProf) {
                axios
                    .get(`/api/professor/landing/${inputVal}`)
                    .then((response) => {
                        setData(response.data)
                        setIsDataLoaded(true)
                    })
            } else {
                axios
                    .get(`/api/university/landing/${inputVal}`)
                    .then((response) => {
                        setData(response.data)
                        setIsDataLoaded(true)
                    })
            }
        }
    }, [inputVal, isProf])

    const onInputHandler = () => {
        setIsDataLoaded(false)
        setData([])
    }

    const inputHandler = (event: any) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            onInputHandler()
            setInputVal((event.target as HTMLInputElement).value)
        }, waitTime)
    }

    return (
        <div
            className={`relative flex justify-center flex-col w-full ${
                inputVal
                    ? "h-full pb-7 rounded-[32px]"
                    : "h-16 rounded-[100px] "
            } bg-white border-2 border-mariana px-2 `}
        >
            {/* <div className="flex items-center "> */}
            <div className="flex flex-row items-center  gap-2 h-full my-2">
                <div className="flex flex-row w-[20%] h-full  items-center ">
                    <CustomListBox
                        isProf={isProf}
                        setIsProf={setIsProf}
                        setInputVal={setInputVal}
                        onInputHandler={onInputHandler}
                    />
                    <div className="w-[2px] h-8 bg-[#909090] rounded-full"></div>
                </div>
                <input
                    onInput={inputHandler}
                    onKeyUp={(e) =>
                        e.key === "Enter" &&
                        !isProf &&
                        router.push(`/search/${inputVal}`)
                    }
                    // value={inputVal}
                    type="text"
                    className="w-full  outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora"
                    placeholder={`Search ${
                        isProf ? "Lecturer" : "University/College"
                    } Name`}
                />
                {inputVal && !isProf && (
                    <Link href={`/search/${inputVal}`}>
                        <Button
                            preset="primary"
                            className="absolute top-4  right-4"
                        >
                            See all
                        </Button>
                    </Link>
                )}
            </div>
            {/* </div> */}

            {isDataLoaded && (
                <Dropdown
                    data={data}
                    isProf={isProf}
                    search={inputVal}
                    setInputVal={setInputVal}
                    onInputHandler={onInputHandler}
                />
            )}
        </div>
    )
}
