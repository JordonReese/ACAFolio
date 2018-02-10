import express from "express";
import { list, findByEmail } from "../controllers/UserController";
const router = express.Router();

router.get("/users", list);
router.get("/users/:email", findByEmail);

export default router;
