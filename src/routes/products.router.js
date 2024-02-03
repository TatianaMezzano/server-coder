import { Router } from "express";
import productModel from '../models/product.model.js'

export const productRouter = Router(); 

productRouter
    .get('/', async (req, res) => {
        try {
            const product = await productModel.find({})
            res.json({
                status: 'success',
                result: product
            })
            
        } catch (error) {
            console.log(error)
            
        }
    })
    .post('/', async (req, res) => {
        try {
            const {body} = req
            const result = await productModel.create(body)
            res.send({
                status: 'success',
                result
            })
        } catch (error) {
            console.log(error)
        }
    })
    .get('/:pid', async (req, res) => {
        try {
            res.send('get product by id')
        } catch (error) {
            console.log(error)            
        }
    })
    .put('/:pid', async (req, res) => {
        try {
            res.send('put product')
        } catch (error) {
            console.log(error)        
        }
    })
    .delete('/:pid', async (req, res) => {
        try {
            res.send('delete product')
        } catch (error) {
            console.log(error)
        
        }
    })