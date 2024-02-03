import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    firs_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        recuire: true
    },
    password: {
        type: String,
        recuire: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

export default model ('users', userSchema)