"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.create = exports.show = exports.list = undefined;

var _ActivityModel = require("../models/ActivityModel.js");

var _ActivityModel2 = _interopRequireDefault(_ActivityModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Get Activities
var list = exports.list = function list(request, response) {
  _ActivityModel2.default.find({}).exec().then(function (activities) {
    // console.log("Activities", activities);
    return response.json(activities);
  });
};

//Get Single Activity
var show = exports.show = function show(request, response) {
  _ActivityModel2.default.findById(request.params.id).exec().then(function (activity) {
    return response.json(activity);
  });
};

//Post Activity
var create = exports.create = function create(request, response) {
  var activity = new _ActivityModel2.default(request.body);
  activity.save().then(function (activity) {
    return response.json(activity);
  });
};

//Put Activity
// export const update = (request, response) => {
//   ActivityModel.findById(request.params.id)
// }

//Delete Activity
var remove = exports.remove = function remove(request, response) {
  console.log("ControllerFired", request.params.id);
  _ActivityModel2.default.remove({ _id: request.params.id }).then(function (activities) {
    return response.json("Acticvity Deleted");
  });
};