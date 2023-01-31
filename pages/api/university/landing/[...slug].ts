import type { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query
    if (slug) {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_ROOT}/schools?page_id=${
                    slug.length > 1 ? slug[1] : 1
                }&page_size=5&name=${slug[0]}`
            )
            .then((response) => {
                res.status(200).json(response.data)
            })
            .catch((error) => res.status(500).send(error))
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
}