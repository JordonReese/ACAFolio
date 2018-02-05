import express from "express";
import {list, show, create, remove, update} from "../controllers/ActivityController.js";

const router = express.Router();

router.get("/activityfeed", list);

router.get("/activityfeed/:id", show);

router.put("/activityfeed/:id", update);

router.delete("/activityfeed/:id", remove);

router.post("/activityfeed", create);




export default router;
