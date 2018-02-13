"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _NotificationsController = require("../controllers/NotificationsController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// get all the notifications
router.get("/notifications", _NotificationsController.list);

// get just one notificaiton
router.get("/notifications", _NotificationsController.show);

// create a notification
router.post("/notifications", create);

// update a notifications - read or unread?
router.put("/notifications", _NotificationsController.update);

// remove a notification
router.delete("/notifications", _NotificationsController.remove);

exports.default = router;