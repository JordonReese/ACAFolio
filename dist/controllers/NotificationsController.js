"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.show = exports.list = undefined;

var _NotificationsModel = require("../models/NotificationsModel");

var _NotificationsModel2 = _interopRequireDefault(_NotificationsModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function to get the notifications
var list = exports.list = function list(request, response) {
  _NotificationsModel2.default.find({}).exec().then(function (notifications) {
    return response.json(notifications);
  });
};

// function to show just one notification
var show = exports.show = function show(request, response) {
  ProfileModel.findOne({ userhandle: request.params.userHandle }).exec().then(function (notification) {
    return response.json({ theHandle: request.params.userHandle });
  });
};

// function to update a notification
var update = exports.update = function update(request, response) {
  return response.json({ theHandle: request.params.userhandle });
};

// function to remove a notification
var remove = exports.remove = function remove(request, response) {
  //  NotificationsModel.remove({[0]})
  // return response.json({});
  return;
};