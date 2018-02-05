"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _ActivityController = require("../controllers/ActivityController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/activityfeed", _ActivityController.list);

router.get("/activityfeed/:id", _ActivityController.show);

router.delete("/activityfeed/:id", _ActivityController.remove);

router.post("/activityfeed", _ActivityController.create);

exports.default = router;