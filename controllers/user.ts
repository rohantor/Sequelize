import { Request, Response } from "express";
import { User } from "../models/user";
import { Order, Sequelize } from "sequelize";
import { Role } from "../models/role";
import { db } from "../config";





export const createUser = async (req: Request, res: Response) => {


    try {
        const record = await User.create({ ...req.body })
        return res.json({ msg: "Successfully created a new user" })
    } catch (e: any) {
        if (e.original.code === 'ER_NO_REFERENCED_ROW_2') {
            return res.status(500).json({ msg: "Role table does not have roleid provided", e })

        }
        res.status(500).json({ msg: "Failed to create user" })
    }
}
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        console.log(req.query)
        const { limit, offset } = req.query
        const _limit = parseInt(limit as string) && parseInt(limit as string) > 0 ? parseInt(limit as string) : 100
        const _offset = parseInt(offset as string) && parseInt(offset as string) > 0 ? parseInt(offset as string) : 0
        console.log("Limit ", _limit, "  offset", _offset)


        const record = await User.findAll(
            {
                attributes: (
                    req.query.group && [
                        (req.query.group) as string, 
                        [db.fn('COUNT', db.col('user.createdBy')), 'count']]) || ['id', 'username', 'roleid', 'createdBy', 'updatedBy', 'createdAt', 'updatedAt'],
                order: [[req.query.orderBy as string, req.query.order as string || 'ASC']],
                limit: _limit,
                offset: _offset,
                include: [
                    {
                        model: Role,
                        attributes: ['name']

                    }
                ],
                group: req.query.group && [(req.query.group) as string],
            })
        return res.json(record)
    } catch (e) {
        res.status(500).json({ msg: "Failed to get users", e })
    }
}
export const getUserById = async (req: Request, res: Response) => {
    try {
        const record = await User.findByPk(
            req.params.id,
            {
                include: [
                    {
                        model: Role,
                        attributes: [
                            ['name', 'role']]
                    }

                ],
                attributes: [
                    'id',
                    'username',
                    'createdBy',
                    'updatedBy',
                    'createdAt',
                    'updatedAt'
                    // , [Sequelize.literal('"Role"."role"'), 'role'],
                ]
            })
        if (record) {

            return res.json(record)
        } else {
            res.json({ msg: "User not found" })
        }
    } catch (e) {
        res.status(500).json({ msg: "Failed to get user" })
    }

}
export const updateUser = async (req: Request, res: Response) => {
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