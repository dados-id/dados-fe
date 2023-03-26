import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { Professor } from "@models"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query

    axios
        .get(`${process.env.NEXT_PUBLIC_API_ROOT}/professors/${slug}`)
        .then((response) => {
            res.status(200).json(response.data as Professor)
        })

        .catch((error) => res.status(500).send(error))
}

export default handler

export const config = {
    api: {
        externalResolver: true,
    },
}
