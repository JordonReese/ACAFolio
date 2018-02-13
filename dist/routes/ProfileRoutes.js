"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _ProfileController = require("../controllers/ProfileController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/profiles", _ProfileController.list);
router.get("/profiles/:id", _ProfileController.show);
router.get("/findByEmail/:email", _ProfileController.findByEmail);
router.post("/profiles", _ProfileController.create);
router.delete("/profiles/:id", _ProfileController.remove);
router.get("/notifications/:userHandle", _ProfileController.getProfileByUserHandle);
router.put("/updateNotifications/:id", _ProfileController.updateNotifications);
// router.put("notifications/:id", updateNotifications);
// router.update("/profile/:id", update);


exports.default = router;