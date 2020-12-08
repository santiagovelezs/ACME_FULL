import Reserva from './../models/Reserva'
import jwt from "jsonwebtoken"
import config from "../config"
import * as Mongoose  from "mongoose"

export const createReserva = async (req, res) => {
    flag: Boolean
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, config.SECRET)
        let userID = decoded.id
        const { room, arrival, departure, adults, children } = req.body        
        const reservas = await Reserva.find({ user: userID })
        let flag = false
        for(let i=0; i<reservas.length; i++)
        {
            if(reservas[i].room == room & reservas[i].active)
            {
                flag = true
            }
        }
        if(flag)
        {
            return res.status(400).json({
                msg: "Habitación No Disponible"
            })
        }
        const NewReserva = new Reserva({
            room,
            arrival,
            departure,
            adults,
            children,
            active: true,
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

export const deleteReservas = async (req, res) => {
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, config.SECRET)
        let userID = decoded.id
        const  id  = req.header('id')   
        console.log("ID", id)  
        console.log(req.header)
        const reservas = await Reserva.findOneAndDelete({ user:userID, room: id })
        return res.json(reservas)
    } catch (error) {
        console.log("Acaaaaa: ",error)
        return res.status(401).send()
    }
}