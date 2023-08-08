import { Header, Body } from "@components"
import { Fragment } from "react"
import UniversityIcon from "public/assets/images/university.svg"
import Lecturer from "public/assets/images/lecturer.svg"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Listbox, Transition } from "@headlessui/react"
import { useRouter } from "next/router"
type CustomListBoxProps = {
    isProf: boolean
    setIsProf: (isProf: boolean) => void
    setInputVal: (inputVal: string) => void
    onInputHandler: () => void
}

export const CustomListBox = ({
    isProf,
    setIsProf,
    setInputVal,
    onInputHandler,
}: CustomListBoxProps) => {
    const router = useRouter()
    const onListBoxClick = () => {
        onInputHandler()
        setInputVal("")
    }

    return (
        <Listbox value={isProf} onChange={setIsProf}>
            <div className="relative mt-1 tablet:px-5 mobile:px-2">
                <Listbox.Button className="relative w-full cursor-pointer rounded-lg py-4 tablet:pr-12 mobile:pr-6 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="w-full cursor-pointer">
                        <Header
                            preset="h6"
                            className="flex items-center tablet:gap-2 mobile:gap-1 mobile:text-[0.620rem] tablet:text-[1rem]"
                        >
                            Berdasarkan {" "}
                            {isProf ? (
                                <Lecturer className="tablet:scale-100 mobile:scale-75" />
                            ) : (
                                <UniversityIcon className="tablet:scale-100 mobile:scale-75" />
                            )}
                        </Header>
                    </span>
                    <span className="cursor-pointer absolute inset-y-0  tablet:right-0 mobile:-right-3 flex items-center pr-2 ">
                        <ChevronDownIcon
                            className="tablet:h-8 tablet:w-8 mobile:w-5 mobile:h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-50"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <Listbox.Option
                            value={false}
                            className={({ active }) =>
                                `relative cursor-default select-none py-2 tablet:px-5 mobile:px-2 ${
                                    active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                }`
                            }
                        >
                            {({ selected }) => (
                                <>
                                    <div
                                        className="flex items-center gap-2 cursor-pointer"
                                        onClick={() => {
                                            onListBoxClick(), router.push("/"), localStorage.removeItem("uniName"), localStorage.removeItem("uniId")
                                        }}
                                    >
                                        <UniversityIcon className="tablet:scale-100 mobile:scale-75" />
                                        <Body preset="p2" className="font-bold">
                                            Universitas
                                        </Body>
                                    </div>
                                </>
                            )}
                        </Listbox.Option>
                        <Listbox.Option
                            value={true}
                            className={({ active }) =>
                                `relative cursor-default select-none py-2 tablet:px-5 mobile:px-2 ${
                                    active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                }`
                            }
                        >
                            {({ selected }) => (
                                <>
                                    <div
                                        className="flex items-center gap-2 cursor-pointer"
                                        onClick={() => onListBoxClick()}
                                    >
                                        <Lecturer className="tablet:scale-100 mobile:scale-75" />
                                        <Body preset="p2" className="font-bold">
                                            Dosen
                                        </Body>
                                    </div>
                                </>
                            )}
                        </Listbox.Option>
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}
