"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _CommentController = require("../controllers/CommentController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Getting the data... the entire list

// import { list, show, create, update, delete } from "../controllers/AddressController";
router.get("/comments", _CommentController.list);

//Getting the data... just one entity
router.get("/comments/:id", _CommentController.show);

//posting new entries to the database
router.post("/comments", _CommentController.create);

//deleting entries from the database
router.delete("/comments/:id", _CommentController.remove);

exports.default = router;