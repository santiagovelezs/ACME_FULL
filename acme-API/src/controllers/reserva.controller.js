import Reserva from './../models/Reserva'
import jwt from "jsonwebtoken"
import config from "../config"

export const createReserva = async (req, res) => {
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, config.SECRET)
        let userID = decoded.id
        const { room, arrival, departure, adults, children } = req.body        

        const NewReserva = new Reserva({
            room,
            arrival,
            departure,
            adults,
            children,
            user: userID
        })
        const savedReserva = await NewReserva.save()
        return res.status(200).json({
            _id: savedReserva._id            
        })
    } catch (error) {
        console.log(error)
        return res.status(401).send()
    }
}

export const getReservas = async (req, res) => {
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, config.SECRET)
        let userID = decoded.id
        const reservas = await Reserva.find({ user: userID })
        return res.json(reservas)
    } catch (error) {
        console.log("Acaaaaa: ",error)
        return res.status(401).send()
    }
}