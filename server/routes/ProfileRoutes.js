import express from "express";
import {list,show,create,remove,update} from "../controllers/ProfileController";
const router = express.Router();

router.get("/profile", list);
router.get("/profile/:id", show);
router.post("/profile", create);
router.delete("/profile/:id", remove);
// router.update("/profile/:id", update);


export default router;
