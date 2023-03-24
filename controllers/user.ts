import * as express from "express";
import { User } from "../models/user";
export const createUser = async (req: express.Request, res: express.Response) => { 

    try {
        const record = await User.create({ ...req.body })
        return res.json({ msg: "Successfully created a new user" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ msg: "Failed to create user" })
    }
}
export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const record = await User.findAll({ attributes: ['id', 'username', 'roleid', 'createdBy', 'updatedBy', 'createdAt', 'updatedAt'] })
        return res.json(record)
    } catch (e) {
        res.status(500).json({ msg: "Failed to get users" })
    }
}
export const getUserById = async (req: express.Request, res: express.Response) => {
    try {
        const record = await User.findByPk(req.params.id)
        if (record) {

            return res.json(record)
        } else {
            res.json({ msg: "User not found" })
        }
    } catch (e) {
        res.status(500).json({ msg: "Failed to create" })
    }

}
export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const record = await User.update({ ...req.body }, { where: { id: req.params.id } })
        if (record[0] === 0) {

            return res.json({ msg: "User not found" })
        }
        res.json({ msg: "Successfully updated todo " })

    } catch (e) {
        res.status(500).json({ msg: "Failed to create" })
    }
}