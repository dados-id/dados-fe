import type { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query
    // query prof by school id
    if (slug) {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_ROOT}/schools/${slug[0]}/professors?page_id=${slug[1]}&page_size=5&sort_order=${slug[2]}&sort_by=${slug[3]}`
            )
            .then((response) => {
                res.status(200).setHeader(
                    "x-total-count",
                    response.headers["x-total-count"]
                )
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
