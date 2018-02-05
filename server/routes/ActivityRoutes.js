import express from "express";
import {list, show, create, update, updateComments, remove} from "../controllers/ActivityController.js";

const router = express.Router();

router.get("/activityfeed", list);

router.get("/activityfeed/:id", show);

router.post("/activityfeed", create);

// router.put("/activityfeed/:id", update);

router.put("/activityfeed/:id", updateComments);

router.delete("/activityfeed/:id", remove);

export default router;
