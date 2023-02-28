import { Header, Body, Button, Toast, Chip } from "@components"
import Link from "next/link"
import { Select, Checkbox,  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import University from "public/assets/images/university.svg"
import { useState } from "react"

const AddProfessor = () => {

    const [selectBy, setSelectBy] = useState("Lecturer")
    const [isOpened, setIsOpened] = useState(false);
    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [faculty, setFaculty] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center w-full h-full bg-white p-8 tablet:p-16 font-hauora">
                {/* Header Card */}
                <div className="flex flex-col items-center justify-center rounded-xl p-3 bg-[#EAF0FF] gap-2 w-full tablet:w-1/2 h-32 tablet:h-52 drop-shadow-xl">
                    <div className="flex items-center">
                        <Header preset="h3" className="text-center">Add a School</Header>
                        <University />
                    </div>
                    <Body preset="p2">Please use the searchbar
                        <Link href={"/"} className="underline font-bold"> above </Link>
                        to make sure that the lecturer does not exist
                    </Body>
                </div>
                {/* School Info */}
                <div className="flex flex-col items-center justify-center gap-6 w-full tablet:w-1/2 rounded-xl p-4 font-bold border  border-grey-200 ">
                    <div className="flex flex-col tablet:flex-1ow gap-5 tablet:gap-1 w-full">
                        <div className="flex flex-col w-full tablet:mx-1 h-full ">
                            <Body preset="p2">Name of School</Body>
                            <div className={`rounded-full flex flex-col bg-white border-2 border-mariana px-4 py-2 gap-2`}>
                                <div className="flex flex-row items-center  gap-2 h-full">
                                    <input onInput={e => setName((e.target as HTMLInputElement).value)} value={name} type="setName" className="w-full outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora " placeholder={`John Doe`} />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col w-full tablet:mx-1 h-full">
                            <Body preset="p2">Commonly Used School Nickname</Body>
                            <div className={`rounded-full relative flex flex-col bg-white border-2 border-mariana px-4 py-2 gap-2`}>
                                <div className="flex flex-row items-center justify-between gap-2 h-full">
                                    <input onInput={e => setFaculty((e.target as HTMLInputElement).value)} value={faculty} type="setName" className="w-full outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`John Doe`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Other Info Input */}
                <div className="flex flex-col tablet:flex-1ow items-center justify-center gap-6 w-full tablet:w-1/2 rounded-xl p-4 font-bold border  border-grey-200 ">
                    <div className="flex flex-col w-full tablet:mx-1 h-full">
                        <Body preset="p2">Province/State</Body>
                        <div className={`rounded-full relative flex flex-col bg-white border-2 border-mariana px-4 py-2 gap-2 `}>
                            <div className="flex flex-row items-center gap-2 h-full ">
                                <input onInput={e => setName((e.target as HTMLInputElement).value)} value={name} type="setName" className="outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`John Doe`} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full tablet:mx-1 h-full">
                        <Body preset="p2">City</Body>
                        <div className={`rounded-full relative flex flex-col bg-white border-2 border-mariana px-4 py-2 gap-2 `}>
                            <div className="flex flex-row items-center gap-2 h-full ">
                                <input onInput={e => setName((e.target as HTMLInputElement).value)} value={name} type="setName" className="outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`John Doe`} />
                            </div>
                        </div>
                    </div>                    
                    <div className="flex flex-col w-full tablet:mx-1 h-full">
                        <Body preset="p2">School's Website</Body>
                        <div className={`rounded-full relative flex flex-col bg-white border-2 border-mariana px-4 py-2 gap-2 `}>
                            <div className="flex flex-row items-center gap-2 h-full ">
                                <input onInput={e => setName((e.target as HTMLInputElement).value)} value={name} type="setName" className="outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`John Doe`} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full tablet:mx-1 h-full">
                        <Body preset="p2">Your Email</Body>
                        <div className={`rounded-full relative flex flex-col bg-white border-2 border-mariana px-4 py-2 gap-2 `}>
                            <div className="flex flex-row items-center gap-2 h-full ">
                                <input onInput={e => setName((e.target as HTMLInputElement).value)} value={name} type="setName" className="outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`John Doe`} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Agreement Input */}
                <div className="flex flex-row items-center justify-center gap-6 w-full tablet:w-1/2 rounded-xl p-4 font-bold border  border-grey-200 ">
                    <div className="flex flex-col w-full tablet:mx-1 h-full text-xs tablet:text-1d">
                        <Checkbox className="">I agree to Terms of Use and Privacy Policy</Checkbox>
                    </div>
                </div>
                <Button preset="primary" onClick={onOpen}>Add School</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="flex flex-col items-center justify-center my-8 gap-6">
                            <University />
                            <div className="flex flex-col text-center">
                                <Header preset="h4">You will add</Header>
                                <Header preset="h4" className="text-ultra-marine">{name}</Header>
                                <Header preset="h4">as a school</Header>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Button preset="primary" onClick={onOpen}>Add School</Button>
                                <Button preset="secondary" onClick={onClose}>Re-Check Inputs</Button>
                            </div>
                        </div>
                    </ModalBody>

                    </ModalContent>
                </Modal>
            </div>
        </>
    )
}

export default AddProfessor;