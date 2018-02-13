"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
  userId: {
    type: String,
    required: false
  },
  userHandle: {
    type: String,
    required: false
  },
  post: {
    type: String,
    required: false
  },
  dateTime: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  likesCount: {
    type: String,
    required: false
  },
  comments: {
    type: Array,
    required: false
  }
});

exports.default = _mongoose2.default.model("Activity", schema, "activityfeed");