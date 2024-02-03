import {Schema, model} from 'mongoose'

const cartSchema = new Schema({
    product: String,
    quantity: Number,
    total: Number,
    
    
})

export default model ('cart', cartSchema)