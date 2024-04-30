import dbConnect from "../../../config/dbConnect.js"
import Pizza from "../../../models/Pizza.js"

export default async function handler(req, res) {
    const { method } = req

    try {
        await dbConnect()

        if (method === "GET") {
            const pizzas = await Pizza.find()
            res.status(200).json(pizzas)
        }
    
        if (method === "POST") {
            const pizza = await Pizza.create(req.body)
            res.status(201).json(pizza)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}
