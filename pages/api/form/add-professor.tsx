import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body

    const separateName = (fullName: string): { firstName: string, lastName: string | undefined } => {
        const splitName = fullName.split(" ");
        const lastName = splitName.pop();
        const firstName = splitName.join(" ");
        return { firstName, lastName };
    }
      
    const { firstName, lastName } = separateName(data.name);
    console.log(firstName); // "John"
    console.log(lastName); // "Doe"

    axios
    .post(`${process.env.NEXT_PUBLIC_API_BE}/professors`, {
        firstName: firstName, 
        lastName: lastName,
        facultyID: 1,
        schoolID: 5
    }
    )
    .then(res => {
      console.log('res', res.data);
    })
    .catch((error) => {
        console.log(error.message)
        res.status(500).send(error)
    })
}


export default handler;

export const config = {
    api: {
        externalResolver: true,
    },
}