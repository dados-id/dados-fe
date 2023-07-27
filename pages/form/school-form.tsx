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

export default function schoolForm() {
    const [schoolName, setSchoolName] = useState("")
    const [schoolNickname, setSchoolNickname] = useState("")
    const [provinceName, setProvinceName] = useState("")
    const [cityName, setCityName] = useState("")
    const [schoolWebsite, setSchoolWebsite] = useState("")
    const [emailName, setEmailName] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    const [listProvinces, setListProvinces] = useState([])
    const [listCities, setListCities] = useState([])
    const [disabled, setDisabled] = useState(true)

    const successToast = Toast({
        preset: "success",
        message: "Success!",
    })

    useEffect(() => {
        axios
            .get(
                "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
            )
            .then((response) => {
                const provinceData = response.data.map((province: any) => ({
                    value: province.name,
                    label: province.name,
                    id: province.id,
                }))

                setListProvinces(provinceData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        setListCities([])
        setDisabled(true)
        setCityName("")
        axios
            .get(
                `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceName.id}.json`
            )
            .then((response) => {
                // console.log(cityName)
                const cityData = response.data.map((city: any) => ({
                    value: city.name,
                    label: city.name,
                    id: city.id,
                }))
                setListCities(cityData)
                setDisabled(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [provinceName])

    const handleChangeProvince = (e: any) => {
        setProvinceName(e)
    }

    const handleSubmit = () => {
        // console.log(schoolName)
        // console.log(schoolNickname)
        // console.log(provinceName)
        // console.log(cityName)
        // console.log(schoolWebsite)
        // console.log(emailName)
        // console.log(isChecked)

        if (
            !schoolName ||
            !schoolNickname ||
            !provinceName ||
            !cityName ||
            !schoolWebsite ||
            !emailName
        ) {
            alert("Please fill in all required fields")
            return
        }

        // buat cek web format
        const websiteRegex =
            /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
        if (!websiteRegex.test(schoolWebsite)) {
            alert("Invalid school website format")
            return
        }

        // buat cek email format
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        if (!emailRegex.test(emailName)) {
            alert("Invalid email format")
            return
        }

        if (isChecked == false) {
            alert("Check to agree to our Terms of Use and Privacy Policy")
        }

        axios
            .post(`${process.env.NEXT_PUBLIC_API_ROOT}/schools`, {
                name: schoolName,
                NickName: [schoolNickname],
                city: provinceName.value,
                province: provinceName.value,
                website: schoolWebsite,
                email: emailName,
            })
            .then((response) => {
                console.log(response)
                successToast()
            })
            .catch((err) => console.log(err))

        // window.location.assign("https://youtube.com")
    }

    return (
        <div className="flex flex-col w-full items-center p-8 gap-4">
            <FormCard isProf={false} />
            <div className="w-full items-center flex flex-col gap-4 pt-12">
                <div className="mobile:w-11/12 tablet:w-3/4 desktop:w-2/3 wide:w-3/5 border border-grey-600 rounded-3xl">
                    <div className="flex tablet:flex-row mobile:flex-col w-5/6 mx-auto py-8 gap-4">
                        <div className="tablet:w-1/2 mobile:w-full flex flex-col">
                            <div className="w-full self-center">
                                <div>Name of School</div>
                                <InputField
                                    value={schoolName}
                                    onChange={(e) =>
                                        setSchoolName(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="tablet:w-1/2 mobile:w-full flex flex-col">
                            <div className="w-full self-center">
                                <div>School Nickname</div>
                                <InputField
                                    value={schoolNickname}
                                    onChange={(e) =>
                                        setSchoolNickname(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile:w-11/12 tablet:w-3/4 desktop:w-2/3 wide:w-3/5 border border-grey-600 rounded-3xl">
                    <div className="flex flex-col w-5/6 mx-auto py-4">
                        <div className="w-full flex flex-col">
                            <div className="w-full self-center py-4">
                                <div className="w-full flex flex-col gap-2">
                                    <div>Province / State</div>
                                    {/* <InputField
                                    value={provinceName}
                                    onChange={(e) =>
                                        setProvinceName(e.target.value)
                                    }
                                /> */}
                                    <AutoCompleteUI
                                        options={listProvinces}
                                        onChange={handleChangeProvince}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="w-full self-center py-4">
                                <div className="w-full flex flex-col gap-2">
                                    <div>City</div>
                                    {/* <InputField
                                    value={cityName}
                                    onChange={(e) =>
                                        setCityName(e.target.value)
                                    }
                                /> */}
                                    <AutoCompleteUI
                                        options={listCities}
                                        value={cityName}
                                        onChange={(e) => setCityName(e)}
                                        isDisabled={disabled}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="w-full self-center py-4">
                                <div>School's Website</div>
                                <InputField
                                    value={schoolWebsite}
                                    onChange={(e) =>
                                        setSchoolWebsite(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="w-full self-center py-4">
                                <div>Your Email</div>
                                <InputField
                                    value={emailName}
                                    onChange={(e) =>
                                        setEmailName(e.target.value)
                                    }
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

// const top100Films = [
//     { label: "The Shawshank Redemption", year: 1994 },
//     { label: "The Godfather", year: 1972 },
// ]
