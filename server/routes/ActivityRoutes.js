import express from "express";
import {list, show, create, remove} from "../controllers/ActivityController.js";

const router = express.Router();

router.get("/activityfeed", list);

router.get("/activityfeed/:id", show);

router.delete("/activityfeed/:id", remove);

router.post("/activityfeed", create);




export default router;
