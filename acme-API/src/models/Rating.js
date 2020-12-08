import { Schema, model }  from "mongoose"

const ratingSchema = new Schema({
    rating: { type: Number, required: true },     
    coment: { type: String, required: true} 
},
    {
        timestamps: true,
        versionKey: false,
    }
)

export default model('Rating', ratingSchema)