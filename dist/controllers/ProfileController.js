"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.show = show;
exports.create = create;
exports.remove = remove;

var _UserModel = require("../models/UserModel");

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(request, response) {
  _UserModel2.default.find({}).exec().then(function (user) {
    return response.json(user);
  });
}

function show(request, response) {
  _UserModel2.default.findById(request.params.id).exec().then(function (user) {
    return response.json(user);
  });
}

function create(request, response) {
  var contact = new _UserModel2.default({
    FirstName: request.body.firstName,
    LastName: request.body.lastName,
    Email: request.body.email,
    Birthday: request.body.birthday,
    UserName: request.body.userName,
    Password: request.body.password,
    ACAID: request.body.acaid
  });
  contact.save().then(function (user) {
    return response.json(user);
  });
}

function remove(request, response) {
  _UserModel2.default.remove({ _id: request.params.id }).then(function (users) {
    return response.send("You have deleted a user.");
  });
}