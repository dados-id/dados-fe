import { Body } from "@components"
import University from "public/assets/images/university.svg"
import Lecturer from "public/assets/images/lecturer.svg"

interface searchResProps {
    data: {
        status: string;
        searchString: string;
        searchBy: string;
    }
}




const Dropdown = ({ data }: searchResProps, searchStr: string) => {
    const lecturerDummy = [
        {
            name: "John Doe",
            university: "UCSD"
        },
        {
            name: "Jane Doe",
            university: "Universitas Indonesia"
        },
        {
            name: "John Doe",
            university: "UCSD"
        },
        {
            name: "Dan Doe",
            university: "ITB Bandung"
        },
    ]

    const universitiesDummy = [
        {
            name: "UCSD",
            city: "Surabaya"
        },
        {
            name: "Universitas Indonesia",
            city: "Surabaya"
        },
        {
            name: "UCSD",
            city: "Surabaya"
        },
        {
            name: "ITB Bandung",
            city: "Surabaya"

        },
    ]

    if (!data.searchString) {
        return null;
    }

    return (
        <div className="px-12">
            {data.status == "exists" &&

                lecturerDummy.map((lecturer) => {
                    console.log(lecturer.name)
                    return (
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <Lecturer />
                                <Body preset="p2">{lecturer.name}</Body>
                            </div>
                            <Body preset="p2">{lecturer.university}</Body>
                        </div>
                    )
                })
            }
            {data.status == "loading" &&

                <div className="flex justify-center items-center">
                    <Body preset="p2">Searching for Queries...</Body>
                </div>
            }
            {data.status == "notfound" &&
                <div className="flex justify-center items-center">
                    <Body preset="p2">No matching results for {data.searchString}</Body>
                </div>
            }
        </div>
    )
}

export default Dropdown;