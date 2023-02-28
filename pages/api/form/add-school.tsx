import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body
    const nicknames = data.nicknames.split(",").map((s: string) => s.trim())
    console.log("type:", nicknames)
    axios
    .post(`${process.env.NEXT_PUBLIC_API_BE}/schools`, {
        name: data.name,
        NickName: nicknames,
        city: data.city,
        province: data.province,
        website: data.website,
        email: data.email
    }
    )
    .then(res => {
      console.log('res', res.data);
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send(error)
    })
}


export default handler;

export const config = {
    api: {
        externalResolver: true,
    },
}