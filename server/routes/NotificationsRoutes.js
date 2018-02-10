import express from "express";
import { list, show, remove, update } from "../controllers/NotificationsController.js";

const router = express.Router();

// get all the notifications
router.get("/notifications", list);

// get just one notificaiton
router.get("/notifications", show);

// create a notification
router.post("/notifications", create);

// update a notifications - read or unread?
router.put("/notifications", update);

// remove a notification
router.delete("/notifications", remove);

export default router;
