'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
  weekId: {
    type: String,
    required: true
  },
  preWork: {
    type: Object,
    required: true
  },
  classwork: {
    type: Object,
    required: true
  },
  homework: {
    homework: Object,
    required: true
  }

});

exports.default = _mongoose2.default.model('coursework', schema, 'coursework');

/*
A weekly section needs:

//PreWork
  PreWorkLinks
    link descriptionm
    link URL

  PreWorkVideos
    video description
    video Links

  PreworkPractice
    practice Links

//Classwork
  PracticeName
  GithubLinks

//HomeWork
  AssignmentName
  GithubLink
  turnInfield
*/