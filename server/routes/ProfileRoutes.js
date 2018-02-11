import express from "express";
import { list, show, create, remove, update, updateNotifications, getProfileByUserHandle} from "../controllers/ProfileController";
const router = express.Router();

router.get("/profiles", list);
router.get("/profiles/:id", show);
router.post("/profiles", create);
router.delete("/profiles/:id", remove);
router.get("/notifications/:userHandle", getProfileByUserHandle);
router.put("/updateNotifications/:id", updateNotifications);
// router.put("notifications/:id", updateNotifications);
// router.update("/profile/:id", update);


export default router;
