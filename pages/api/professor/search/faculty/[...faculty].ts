import type { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { faculty } = req.query
    if (faculty) {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_ROOT}/schools/${
                    faculty[0]
                }/faculties/${faculty[1]}/professors?page_id=${
                    faculty[2]
                }&page_size=5&sort_order=${faculty[3]}&sort_by=${faculty[4]}${
                    faculty[5] ? `&name=${faculty[5]}` : ""
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
