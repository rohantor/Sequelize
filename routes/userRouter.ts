import express from "express";
import { createUser, getAllUsers, getUserById, updateUser } from "../controllers/user";
const UserPutbodyChecker = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    if (req.body.username && req.body.password && req.body.updatedBy && req.body.createdBy && req.body.roleid) {
        return next()
    }

    res.status(400).send("Parameters are missing or invalid")


}

const router = express.Router();
router.post('/', createUser)
router.get('/', getAllUsers)
router.put('/:id', UserPutbodyChecker, updateUser)
router.patch('/:id', updateUser)
router.get('/:id', getUserById)


export default router