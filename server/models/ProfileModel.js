import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  smhandle: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true
    },
    birthday: {
      type: String,
      required: true
    },
    cityState: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    }
  });


module.exports = mongoose.model("Profile", profileSchema);
