import Album from '../models/Album'
import Rating from '../models/Rating'
import jwt from "jsonwebtoken"
import config from "../config"

export const createAlbum = async (req, res) => {
    try {
        const { name, token } = req.body
        const decoded = jwt.verify(token, config.SECRET)
        let userID = decoded.id

        const Newalbum = new Album({
            name,
            user: userID
        })
        const savedAlbum = await Newalbum.save()
        return res.status(200).json({
            _id: savedAlbum._id,
            name: savedAlbum.name
        })
    } catch (error) {
        console.log(error)
        return res.status(401).send()
    }
}

export const rate = async (req,res) => {
    try{
        console.log(req.body)
        const { rating, coment } = req.body
        
        const rt = new Rating({
            rating,
            coment                 
        })        
        const savedRate = await rt.save()
        return res.status(200).json({ message: "Rate Ok" })        
    }
    catch(error){
        console.log(error)
    }
}

export const getAlbumsByUserId = async (req, res) => {
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, config.SECRET)
        let userID = decoded.id
        const albums = await Album.find({ user: userID })
        return res.json(albums)
    } catch (error) {
        console.log("Acaaaaa: ",error)
        return res.status(401).send()
    }
}

export const getAlbumById = async (req, res) => {
    try {
        const { id } = req.params
        console.log("Album Id: ",id)
        const album = await Album.findOne({ _id: id })
        console.log("Nameeeeeeeeeeeeeeeeeeee: ",album.name)
        return res.json(album)
    } catch (error) {
        console.log(error)
        return res.status(401).send()
    }

}