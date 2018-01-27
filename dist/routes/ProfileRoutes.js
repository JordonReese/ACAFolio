"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _UserController = require("../controllers/UserController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/profiles", _UserController.list);
router.get("/profiles/:id", _UserController.show);
router.post("/profiles", _UserController.create);
router.delete("/profiles/:id", _UserController.remove);

exports.default = router;