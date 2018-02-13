"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var profileSchema = new Schema({
  userId: {
    type: String,
    required: false
  },
  userHandle: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  birthday: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  notifications: {
    type: Array,
    required: false
  }

});

module.exports = _mongoose2.default.model("profile", profileSchema);