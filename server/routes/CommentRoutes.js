import express from "express";
// import { list, show, create, update, delete } from "../controllers/AddressController";
import { list, show, create, remove } from "../controllers/CommentController";
const router = express.Router();

//Getting the data... the entire list
router.get("/comments", list);


//Getting the data... just one entity
router.get("/comments/:id", show);


//posting new entries to the database
router.post("/comments", create);

//deleting entries from the database
router.delete("/comments/:id", remove);

export default router;
