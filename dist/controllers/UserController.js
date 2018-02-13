"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.findByEmail = findByEmail;

var _UserModel = require("../models/UserModel");

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//List User
function list(request, response) {
  _UserModel2.default.find({}).exec().then(function (users) {
    return response.json(users);
  });
}

//Find the user by email.  Used to get id for the profile.
function findByEmail(request, response) {
  _UserModel2.default.find({ email: request.params.email }).exec().then(function (user) {
    return response.json(user);
  });
}