import { Dropdown, Button, CustomListBox, Body } from "@components"
import { useState, useEffect, useRef } from "react"
import { University, Professor } from "@models"
import { useRouter } from "next/router"
import Link from "next/link"
import axios from "axios"

type SearchBarProps = {
    isProf: boolean
    setIsProf: (isProf: boolean) => void
    changeSchool: boolean
    setChangeSchool: (isProf: boolean) => void
}
export const SearchBar = ({ isProf, setIsProf, changeSchool, setChangeSchool }: SearchBarProps) => {
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)
    const [data, setData] = useState<University[] | Professor[]>()
    const [inputVal, setInputVal] = useState("")

    const router = useRouter()
    let timer: NodeJS.Timeout
    const waitTime = 500

    useEffect(() => {
        if (changeSchool) {
            onChangeSchool()
        } else{
            if (inputVal) {
                if (isProf) {
                    if (localStorage.getItem("uniId")) {
                        // query by school and name
                        axios
                            .get(
                                `/api/professor/search/${localStorage.getItem(
                                    "uniId"
                                )}/1/asc/name/${inputVal}`
                            )
                            .then((response) => {
                                setData(response.data)
                                setIsDataLoaded(true)
                            })
                    } else {
                        axios
                            .get(`/api/professor/landing/${inputVal}`)
                            .then((response) => {
                                setData(response.data)
                                setIsDataLoaded(true)
                            })
                    }
                } else {
                    axios
                        .get(`/api/university/landing/${inputVal}`)
                        .then((response) => {
                            setData(response.data)
                            setIsDataLoaded(true)
                        })
                }
            }
        }

    }, [inputVal, isProf, changeSchool])

    // Create a reference to the input element
    const inputRef = useRef<HTMLInputElement>(null);


    // Function to reset the input field
    const resetInput = () => {
        if (inputRef.current) {
        inputRef.current.value = '';
        }
    }

    const onInputHandler = () => {
        setIsDataLoaded(false)
        setData([])
    }

    const onChangeSchool = () => {
        console.log(changeSchool)
        resetInput()
        setInputVal("")
        setIsDataLoaded(false)
        setData([])
        setChangeSchool(false)
        console.log(changeSchool)
    }

    const inputHandler = (event: any) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            onInputHandler()
            setInputVal(event.target.value)
        }, waitTime)
    }

    return (
        <div
            className={`relative flex justify-center flex-col mr-20 ml-20 ${
                inputVal
                    ? "h-full pb-7 rounded-[32px]"
                    : "desktop:h-16 tablet:h-14 mobile:h-10 rounded-[100px] "
            } bg-white border-2 border-mariana tablet:px-2 mobile:px-1 `}
        >
            {/* <div className="flex items-center "> */}
            <div className="flex flex-row items-center ml-5 tablet:gap-2 h-full tablet:my-2">
                {/* <div className="flex flex-row desktop:w-[20%] tablet:w-[40%] mobile:w-[65%] h-full  items-center ">
                    <CustomListBox
                        isProf={isProf}
                        setIsProf={setIsProf}
                        setInputVal={setInputVal}
                        onInputHandler={onInputHandler}
                    />
                    <div className="w-[2px] tablet:h-8 mobile:h-5 bg-[#909090] rounded-full"></div>
                </div> */}
                <input
                    ref={inputRef}
                    onInput={inputHandler}
                    onKeyUp={(e) => {
                        e.key === "Enter" && !isProf
                            ? (router.push(`/search/${inputVal}`),
                              localStorage.removeItem("uniId"),
                              localStorage.removeItem("uniName"))
                            : e.key === "Enter" &&
                              localStorage.getItem("uniName")
                            ? 
                            router.push(
                                  `/search/${localStorage.getItem(
                                      "uniId"
                                  )}/?professor=true&university=${localStorage.getItem(
                                      "uniName"
                                  )}&name=${inputVal}`
                              )
                            : e.key === "Enter" &&
                              router.push(`/search/${inputVal}/?professor=true`)
                    }}
                    type="text"
                    className="w-full outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-grey-600 font-hauora"
                    placeholder={`Cari Nama ${
                        isProf ? "Dosen" : "Universitas"
                    }`}
                />
                {inputVal && !isProf ? (
                    <Link href={`/search/${inputVal}`}>
                        <Button
                            preset="primary"
                            className="mr-4 whitespace-nowrap"
                            onClick={() => {
                                localStorage.removeItem("uniId"),
                                    localStorage.removeItem("uniName")
                            }}
                        >
                            Lihat semua
                        </Button>
                    </Link>
                ) : (
                    inputVal && (
                        <Link
                            href={
                                localStorage.getItem("uniName")
                                    ? `/search/${localStorage.getItem(
                                          "uniId"
                                      )}/?professor=true&university=${localStorage.getItem(
                                          "uniName"
                                      )}&name=${inputVal}`
                                    : `/search/${inputVal}/?professor=true`
                            }
                        >
                            <Button
                                preset="primary"
                                className="mr-4 whitespace-nowrap"
                            >
                                Lihat semua
                            </Button>
                        </Link>
                    )
                )}
            </div>
            {/* </div> */}


            {isDataLoaded && (
                <div onClick={resetInput}>
                <Dropdown
                    data={data}
                    isProf={isProf}
                    search={inputVal}
                    setInputVal={setInputVal}
                    onInputHandler={onInputHandler}
                    
                />
                </div>
            )}
        </div>
    )
}

