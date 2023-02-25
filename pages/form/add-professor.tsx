import { Header, Body, Button, Toast, Chip } from "@components"
import Link from "next/link"
import { Select, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Tag, TagLabel, TagLeftIcon, Icon } from "@chakra-ui/react"
import Lecturer from "public/assets/images/lecturer.svg"
import { useState } from "react"

const AddProfessor = () => {

    const [selectBy, setSelectBy] = useState("Lecturer")
    const [isOpened, setIsOpened] = useState(false);
    const [inputVal, setInputVal] = useState("")
    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center w-full h-full bg-white p-16 font-hauora">
                {/* Header Card */}
                <div className="flex flex-col items-center justify-center rounded-xl p-3 bg-[#EAF0FF] gap-2 w-1/2 h-52 drop-shadow-xl">
                    <div className="flex items-center">
                        <Header preset="h3" >Add Professor</Header>
                        <Lecturer />
                    </div>
                    <Body preset="p2">Please use the searchbar
                        <Link href={"/"} className="underline font-bold"> above </Link>
                        to make sure that the lecturer does not exist
                    </Body>
                </div>
                {/* Name Input */}
                <div className="flex flex-row items-center justify-center gap-6 w-1/2 rounded-xl p-4 font-bold border  border-grey-200 ">
                    <div className="flex flex-col w-full mx-4 h-full">
                        <Body preset="p2">Lecturer's Name</Body>
                        <div className={`rounded-full relative flex flex-col bg-white border-2 border-mariana px-4 py-2 gap-2`}>
                            <div className="flex flex-row items-center justify-between gap-2 h-full">
                                <input onInput={e => setInputVal((e.target as HTMLInputElement).value)} value={inputVal} type="text" className="w-full outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`John Doe`} />
                            </div>
                        </div>
                    </div>

                    {/* <Select placeholder='All Courses'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select placeholder='All Ratings'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Checkbox defaultChecked className="w-1/3">My Reviews</Checkbox> */}
                </div>
                {/* School Input */}
                <div className="flex flex-col items-center justify-center gap-6 w-1/2 rounded-xl p-4 font-bold border  border-grey-200 ">
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col w-full mx-4 h-full">
                            <Body preset="p2">Name of School</Body>
                            <div className={`rounded-full relative flex flex-col bg-white border-2 border-mariana px-4 py-2 gap-2`}>
                                <div className="flex flex-row items-center justify-between gap-2 h-full">
                                    <input onInput={e => setInputVal((e.target as HTMLInputElement).value)} value={inputVal} type="text" className="w-full outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`John Doe`} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mx-4 h-full">
                            <Body preset="p2">Department/Faculty</Body>
                            <div className={`rounded-full relative flex flex-col bg-white border-2 border-mariana px-4 py-2 gap-2`}>
                                <div className="flex flex-row items-center justify-between gap-2 h-full">
                                    <input onInput={e => setInputVal((e.target as HTMLInputElement).value)} value={inputVal} type="text" className="w-full outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`John Doe`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Body preset="p3">Can't find your school? Add a school</Body>
                    {/* <Select placeholder='All Courses'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select placeholder='All Ratings'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Checkbox defaultChecked className="w-1/3">My Reviews</Checkbox> */}
                </div>
                {/* Agreement Input */}
                <div className="flex flex-row items-center justify-center gap-6 w-1/2 rounded-xl p-4 font-bold border  border-grey-200 ">
                    <div className="flex flex-col w-full mx-4 h-full">
                        <Checkbox className="">I agree to Terms of Use and Privacy Policy</Checkbox>
                    </div>
                </div>
                <Button preset="primary">Add Lecturer</Button>
            </div>
        </>
    )
}

export default AddProfessor;