import { Router } from "express";
import userModel from '../models/user.model.js'

export const userRouter = Router(); 

userRouter
    .get('/', async (req, res) => {
        try {
            const user = await userModel.find({})
            res.json({
                status: 'success',
                result: user,
            })
            
        } catch (error) {
            console.log(error)
            
        }
    })
    .post('/', async (req, res) => {
        try {
            const {body} = req
            const result = await userModel.create(body)
            res.send({
                status: 'success',
                result
            })
        } catch (error) {
            console.log(error)
        }
    })
    .get('/:uid', async (req, res) => {
        try {
            res.send('get user by uid')
        } catch (error) {
            console.log(error)            
        }
    })
    .put('/:uid', async (req, res) => {
        try {
            res.send('put user by uid')
        } catch (error) {
            console.log(error)        
        }
    })
    .delete('/:uid', async (req, res) => {
        try {
            res.send('delete user by uid')
        } catch (error) {
            console.log(error)
        
        }
    })