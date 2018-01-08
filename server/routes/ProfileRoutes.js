import express from "express";
import {list,show,create,remove} from "../controllers/UserController";
const router = express.Router();

router.get("/profiles", list);
router.get("/profiles/:id", show);
router.post("/profiles", create);
router.delete("/profiles/:id", remove);

export default router;
