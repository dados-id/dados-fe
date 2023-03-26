import type { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { byschool } = req.query
    // query prof by school id

    if (byschool) {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_ROOT}/schools/${
                    byschool[0]
                }/professors?page_id=${byschool[1]}&page_size=5&sort_order=${
                    byschool[2]
                }&sort_by=${byschool[3]}${
                    byschool[4] ? `&name=${byschool[4]}` : ""
                }`
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
