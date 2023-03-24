import express from "express";
import { Role } from "../models/role";
import { createRole, getAllRole, getRoleById, updateRole } from "../controllers/role";


const router = express.Router();

router.post('/', createRole)
router.get('/', getAllRole)
router.put('/:id', updateRole)
router.patch('/:id', updateRole)
router.get('/:id', getRoleById)
export default router