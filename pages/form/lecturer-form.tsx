import {
    FormCard,
    InputField,
    CheckBox,
    Button,
    AutoCompleteUI,
    Toast,
} from "@components"
import { useState, useEffect } from "react"
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"
import axios from "axios"
import { Portal, Box } from "@chakra-ui/react"

export default function lecturerForm() {
    const [lecturerName, setLecturerName] = useState("")
    const [schoolName, setSchoolName] = useState([])
    const [facultyName, setFacultyName] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    const [schoolData, setSchoolData] = useState([])
    const [facultyData, setFacultyData] = useState([])
    const [selectedID, setSelectedID] = useState(0)
    const [disabled, setDisabled] = useState(true)

    const successToast = Toast({
        preset: "success",
        message: "Success!",
    })

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ROOT}/schools`)
            .then((response) => {
                // setSchoolData(response.data)
                const modifiedData = response.data.map((school) => ({
                    value: school.name,
                    label: school.name,
                    id: school.id,
                }))
                // console.log(response)
                setSchoolData(modifiedData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleOnChange = (e) => {
        // console.log(e.id)
        setSchoolName(e)
        setSelectedID(e.id)
    }

    useEffect(() => {
        setFacultyName([])
        setFacultyData([])
        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_ROOT}/schools/${schoolName.id}/faculties`
            )
            .then((response) => {
                // setSchoolData(response.data)
                const modifiedData = response.data.map((faculty) => ({
                    value: faculty.name,
                    label: faculty.name,
                    id: faculty.id,
                }))
                console.log(response)
                setFacultyData(modifiedData)
                setDisabled(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [schoolName])

    const handleSubmit = () => {
        // console.log(lecturerName)
        // console.log(schoolName.value)
        // console.log(facultyName.value)

        if (!lecturerName || !schoolName || !facultyName) {
            alert("Please fill in all required field!")
            return
        }

        if (!isChecked) {
            alert("Check to agree to our Terms of Use and Privacy Policy")
        }

        axios
            .post(`${process.env.NEXT_PUBLIC_API_ROOT}/professors`, {
                firstName: lecturerName,
                lastName: lecturerName,
                facultyID: facultyName.id,
                schoolID: schoolName.id,
            })
            .then((response) => {
                console.log(response)
                successToast()
            })
            .catch((err) => console.log(err))
        // location.reload()

        window.location.assign("https://youtube.com")
        // window.location.href = "https://youtube.com"
    }

    return (
        <div className="flex flex-col w-full items-center p-8 gap-4">
            <FormCard isProf />
            <div className="w-full items-center flex flex-col gap-4 pt-12">
                <div className="mobile:w-11/12 tablet:w-3/4 desktop:w-2/3 wide:w-3/5 border border-grey-600 rounded-3xl">
                    <div className="flex flex-col w-5/6 mx-auto py-4">
                        <div className="w-full flex flex-col">
                            <div className="w-full self-center py-4">
                                <div>Lecturer's Name</div>
                                <InputField
                                    value={lecturerName}
                                    onChange={(e) =>
                                        setLecturerName(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile:w-11/12 tablet:w-3/4 desktop:w-2/3 wide:w-3/5 border border-grey-600 rounded-3xl">
                    <div className="flex dekstop:flex-row tablet:flex-row mobile:flex-col w-5/6 mx-auto py-8 gap-4">
                        <div className="tablet:w-1/2 dekstop:w-1/2 mobile:w-full flex flex-col">
                            <div className="w-full self-center flex flex-col gap-2">
                                <div>Name of School</div>
                                <AutoCompleteUI
                                    value={schoolName}
                                    onChange={handleOnChange}
                                    options={schoolData}
                                />
                            </div>
                        </div>
                        <div className="tablet:w-1/2 dekstop:w-1/2 mobile:w-full flex flex-col">
                            <div className="w-full self-center flex flex-col gap-2">
                                <div>Department / Faculty</div>
                                <AutoCompleteUI
                                    value={facultyName}
                                    onChange={(e) => setFacultyName(e)}
                                    options={facultyData}
                                    isDisabled={disabled}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile:w-11/12 tablet:w-3/4 desktop:w-2/3 wide:w-3/5 border border-grey-600 rounded-3xl">
                    <div className="flex w-5/6 mx-auto py-4">
                        <div className="w-full flex flex-col">
                            <div className="w-full self-center py-4">
                                <Checkbox
                                    colorScheme="green"
                                    size="lg"
                                    checked={isChecked}
                                    onChange={(e) => {
                                        setIsChecked(e.target.checked)
                                    }}
                                >
                                    I agree to{" "}
                                    <a
                                        href="https://youtu.be/xvFZjo5PgG0"
                                        style={{
                                            color: "blue",
                                            textDecoration: "underline",
                                        }}
                                    >
                                        Terms of Use and Privacy Policy
                                    </a>
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-12 pb-20">
                <Button preset="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    )
}

const top100Films = [
    { value: "The Shawshank Redemption", label: "The Shawshank Redemption" },
    { value: "The Godfather", label: "The Godfather" },
]

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
]
