"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
  FirstName: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  LastName: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  Email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  Birthday: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  UserName: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  ACAID: {
    type: String,
    required: true
  }
});

module.exports = _mongoose2.default.model("User", userSchema);