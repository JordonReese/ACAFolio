"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.create = exports.show = exports.list = undefined;

var _CommentModel = require("../models/CommentModel");

var _CommentModel2 = _interopRequireDefault(_CommentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function to get the list of comments.
var list = exports.list = function list(request, response) {
  _CommentModel2.default.find({}).exec().then(function (comments) {
    return response.json(comments);
  });
  // return response.json(addresses);
};

// function to get details of one comment
var show = exports.show = function show(request, response) {

  _CommentModel2.default.findById(request.params.id).exec().then(function (comment) {
    return response.json(comment);
  });

  // return response.json(addresses.find(address => address._id == request.params.id));
};

// function to create a comment
var create = exports.create = function create(request, response) {

  var comment = new _CommentModel2.default(request.body);
  comment.save().then(function (c) {
    return response.json(c);
  });

  // return response.json(addresses.push(request.body));
};

var remove = exports.remove = function remove(request, response) {

  _CommentModel2.default.remove({ _id: request.params.id }).then(function (comments) {
    return response.json("comment deleted");
  });
};