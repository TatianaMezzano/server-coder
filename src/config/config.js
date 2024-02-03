import {connect} from 'mongoose'

export const connectDB = async () => {
    try {
        await connect('mongodb://127.0.0.1:27017/proyectoServer')
        console.log('base de datos conectada')
    } catch (error) {
        conosle.log(error)
    }
}