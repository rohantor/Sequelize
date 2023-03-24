import * as express from 'express'
import { TodoInstance } from '../models/todo';
import { v4 as uuidv4 } from 'uuid'
const router = express.Router()
router.post('/', async (req, res) => {
    const id = uuidv4();
    try {
        const record = await TodoInstance.create({ ...req.body, id })
        return res.json({ record, msg: "Successfully created a new todo" })
    } catch (e) {
        res.status(500).json({ msg: "Failed to create" })
    }




})

router.get('/', async (req, res) => {
    try {
        const record = await TodoInstance.findAll({})
        return res.json(record)
    } catch (e) {
        res.status(500).json({ msg: "Failed to create" })
    }
})
router.put('/:id', async (req, res) => {
    try {
        const record = await TodoInstance.update({ ...req.body }, { where: { id: req.params.id } })
        return res.json({ msg: "Successfully updated todo " })
    } catch (e) {
        res.status(500).json({ msg: "Failed to create" })
    }
})
router.get('/:id', async (req, res) => {
    try {
        // const record = await TodoInstance.findAll({ where: { id: req.params.id } })
        const record = await TodoInstance.findByPk(req.params.id)
        return res.json(record)
    } catch (e) {
        res.status(500).json({ msg: "Failed to create" })
    }
})
export default router