import express from "express";
import { createUser, getAllUsers, getUserById, updateUser } from "../controllers/user";


const router = express.Router();
router.post('/', createUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.patch('/:id', updateUser)
router.get('/:id', getUserById)


export default router