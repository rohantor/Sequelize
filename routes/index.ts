import * as express from 'express'
import TodoRouter from './todoRouter'
import RoleRouter from './roleRouter'
import UserRouter from './userRouter'

export const router = express.Router()
router.use('/todo', TodoRouter)
router.use('/role', RoleRouter)
router.use('/user', UserRouter)

router.get('/', (req, res) => {
    res.send("Hello!")
})
