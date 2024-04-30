import dbConnect from "../../../config/dbConnect.js"
import Pizza from "../../../models/Pizza.js"

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    if (method === "GET") {
        try {
            const pizzas = await Pizza.find()
            res.status(200).json(pizzas)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    if (method === "POST") {
        try {
            const pizza = await Pizza.create(req.body)
            res.status(201).json(pizza)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
