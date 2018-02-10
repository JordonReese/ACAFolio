import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    },
    Notifications: {
      type: Array,
      required: false
    }

  });


module.exports = mongoose.model("User", userSchema);
