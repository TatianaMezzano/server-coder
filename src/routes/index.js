import {Router} from 'express';
import { productRouter } from './products.router.js';
import viewsRouter from './views.router.js.router.js'


const router = Router();

router.use('/',  viewsRouter)
router.use('/api/products', userRouter)

outer.use('/api/carts', (req, res) => {})

export default router;