import {Router} from 'express';
import { userRouter } from './users.router.js';
import viewsRouter from './views.router.js.router.js'


const router = Router();

router.use('/',  viewsRouter)
router.use('/api/users', userRouter)
// router.use('/api/products', (req, res) => {})
// router.use('/api/carts', (req, res) => {})

export default router;