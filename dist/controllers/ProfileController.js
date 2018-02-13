"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.show = show;
exports.findByEmail = findByEmail;
exports.create = create;
exports.remove = remove;
exports.getProfileByUserHandle = getProfileByUserHandle;
exports.updateNotifications = updateNotifications;

var _ProfileModel = require("../models/ProfileModel");

var _ProfileModel2 = _interopRequireDefault(_ProfileModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//List Profile
function list(request, response) {
  _ProfileModel2.default.find({}).exec().then(function (profiles) {
    return response.json(profiles);
  });
}

//Show Profile
function show(request, response) {
  _ProfileModel2.default.findById(request.params.id).exec().then(function (profile) {
    return response.json(profile);
  });
}

//Find the user by email.  Used to get id for the profile.
function findByEmail(request, response) {
  _ProfileModel2.default.findOne({ email: request.params.email }).exec().then(function (profile) {
    return response.json(profile);
  });
}

//Create Profile
function create(request, response) {
  var profile = new _ProfileModel2.default(request.body);
  profile.save().then(function (profile) {
    console.log("Profile saved to the database");
    return response.json(profile);
    // })
    // .catch(err => {
    //   console.log("create profile error", err);
    // next(err);
  });
}

//Remove Profile
function remove(request, response) {
  _ProfileModel2.default.remove({ _id: request.params.id }).then(function (profile) {
    return response.send("You have deleted a Profile.");
  });
}

function getProfileByUserHandle(request, response) {
  _ProfileModel2.default.findOne({ userHandle: request.params.userHandle }).exec().then(function (profile) {
    return response.json(profile);
  });
}

function updateNotifications(request, response) {
  _ProfileModel2.default.update({ _id: request.params.id }, { notifications: request.body }).then(function (result) {
    return response.send("You have updated a notification");
  });
}