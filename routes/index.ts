import * as express from 'express'
import TodoRouter from './todoRouter'
import RoleRouter from './roleRouter'
import UserRouter from './userRouter'
import { Role } from '../models/role'
import { User } from '../models/user'

export const router = express.Router()
router.use('/todo', TodoRouter)
router.use('/role', RoleRouter)
router.use('/user', UserRouter)



router.get('/findAndCount', async (req, res) => {

    try {
        const record = await User.findAndCountAll({})
        return res.json(record)
    } catch (e) {
        res.status(500).json({ msg: "Failed to get roles" })
    }
})


router.get('/', (req, res) => {
    res.send("Hello!")
})
