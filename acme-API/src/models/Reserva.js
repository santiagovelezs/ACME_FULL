import { Schema, model }  from "mongoose"

const reservaSchema = new Schema({
    room: { type: String, required: true },    
    arrival: { type: Date, required: true },   
    departure: { type: Date, required: true },    
    adults: { type: Number, required: true },    
    children: { type: Number, required: true },           
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true} 
},
    {
        timestamps: true,
        versionKey: false,
    }
)

export default model('Reserva', reservaSchema)