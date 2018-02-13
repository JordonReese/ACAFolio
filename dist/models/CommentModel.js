"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
  activityId: {
    required: false,
    type: String
  },
  userId: {
    required: false,
    type: String
  },
  userName: {
    required: false,
    type: String
  },
  text: {
    required: false,
    type: String
  },
  dateTime: {
    required: false,
    type: String
  },
  likesCount: {
    required: false,
    type: String
  }

});

exports.default = _mongoose2.default.model("comment", schema, "comments");