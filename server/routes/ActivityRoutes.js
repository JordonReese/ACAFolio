import express from "express";
import {list, show, create, remove} from "../controllers/ActivityController.js";

const router = express.Router();

router.get("/activityfeed", list);

router.get("/activityfeed/:id", show);

router.post("/activityfeed", create);

router.delete("/activityfeed/:id", remove);

export default router;
