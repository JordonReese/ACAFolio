import express from "express";

import { list, show, create, remove, update, findByEmail, updateNotifications } from "../controllers/ProfileController";

const router = express.Router();

router.get("/profiles", list);
router.get("/profiles/:id", show);
router.get("/findByEmail/:email", findByEmail);
router.post("/profiles", create);
router.delete("/profiles/:id", remove);
router.put("notifications/:id", updateNotifications);
// router.update("/profile/:id", update);


export default router;
