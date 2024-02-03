import { Router } from "express";
import cartModel from '../models/cart.model.js'

export const cartRouter = Router(); 

cartRouter
    .get('/', async (req, res) => {
        try {
            const cart = await cartModel.find({})
            res.json({
                status: 'success',
                result: cart
            })
            
        } catch (error) {
            console.log(error)
            
        }
    })
    .post('/', async (req, res) => {
        try {
            const {body} = req
            const result = await cartModel.create(body)
            res.send({
                status: 'success',
                result
            })
        } catch (error) {
            console.log(error)
        }
    })
    .get('/:cid', async (req, res) => {
        try {
            res.send('get cart')
        } catch (error) {
            console.log(error)            
        }
    })
    .put('/:cid', async (req, res) => {
        try {
            res.send('put cart')
        } catch (error) {
            console.log(error)        
        }
    })
    .delete('/:cid', async (req, res) => {
        try {
            res.send('delete cart')
        } catch (error) {
            console.log(error)
        
        }
    })