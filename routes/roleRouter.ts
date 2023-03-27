import express from "express";
import { Role } from "../models/role";
import { createRole, getAllRole, getRoleById, updateRole } from "../controllers/role";


const router = express.Router();

const RolePutbodyChecker = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    if (req.body.name && req.body.createdBy && req.body.updatedBy) {
       return next()
    }

res.status(400).send("Parameters are missing or invalid")


}
router.post('/', createRole)
router.get('/', getAllRole)
router.put('/:id', RolePutbodyChecker, updateRole)
router.patch('/:id', updateRole)
router.get('/:id', getRoleById)
export default router