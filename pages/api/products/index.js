import dbConnect from "../../../config/dbConnect.js"
import Pizza from "../../../models/Pizza.js"


export default async function handler(req, res) {
    const { method } = req

    dbConnect()

    if (method === "GET") {
        const pizza = await Pizza.find()
        res.status(200).json(pizza)
    }

    if (method === "POST") {
        try {
            const pizza = await Pizza.create(req.body)
            res.status(201).json()

        } catch (error) {
            res.status(500).json(error)
        }
    }



}

