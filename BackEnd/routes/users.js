import express from "express";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getUsers, Register, login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);



export default router;