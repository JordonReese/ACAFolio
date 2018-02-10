import express from "express";
import { list, show, create, remove, update } from "../controllers/ProfileController";
const router = express.Router();

router.get("/profiles", list);
router.get("/profiles/:id", show);
router.post("/profiles", create);
router.delete("/profiles/:id", remove);
// router.update("/profile/:id", update);


export default router;
