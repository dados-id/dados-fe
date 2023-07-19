import { FormCard, InputField, CheckBox, Button } from "@components"
import { useState } from "react"
import axios from "axios"

export default function schoolForm() {
    const [schoolName, setSchoolName] = useState("")
    const [schoolNickname, setSchoolNickname] = useState("")
    const [provinceName, setProvinceName] = useState("")
    const [cityName, setCityName] = useState("")
    const [schoolWebsite, setSchoolWebsite] = useState("")
    const [emailName, setEmailName] = useState("")

    const handleSubmit = () => {
        // console.log(schoolName)
        // console.log(schoolNickname)
        // console.log(provinceName)
        // console.log(cityName)
        // console.log(schoolWebsite)
        // console.log(emailName)
        axios
            .post(`${process.env.NEXT_PUBLIC_API_ROOT}/schools`, {
                name: schoolName,
                NickName: [schoolNickname],
                city: provinceName,
                province: provinceName,
                website: schoolWebsite,
                email: emailName,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err))

        // location.reload()
    }

    return (
        <div className="flex flex-col w-full items-center p-8 gap-4">
            <FormCard />
            <div className="w-3/4 border border-grey-600 rounded-3xl">
                <div className="flex w-5/6 mx-auto py-4 gap-4">
                    <div className="w-1/2 flex flex-col">
                        <div className="w-full self-center py-4">
                            <div>Name of School</div>
                            <InputField
                                value={schoolName}
                                onChange={(e) => setSchoolName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <div className="w-full self-center py-4">
                            <div>Commonly Used School Nickname</div>
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
            <div className="w-3/4 border border-grey-600 rounded-3xl">
                <div className="flex flex-col w-5/6 mx-auto py-4">
                    <div className="w-full flex flex-col">
                        <div className="w-full self-center py-4">
                            <div>Province / State</div>
                            <InputField
                                value={provinceName}
                                onChange={(e) =>
                                    setProvinceName(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <div className="w-full self-center py-4">
                            <div>City</div>
                            <InputField
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                            />
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
                                onChange={(e) => setEmailName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/4 border border-grey-600 rounded-3xl">
                <div className="flex w-5/6 mx-auto py-4">
                    <div className="w-full flex flex-col">
                        <div className="w-full self-center py-4">
                            <CheckBox />
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
