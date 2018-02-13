import mongoose from "mongoose";

const schema = new mongoose.Schema({
  weekId: {
    type: String,
    required: true
  },
  preWork: {
    type: Object,
    required: true,
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

export default mongoose.model('coursework', schema, 'coursework');

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
