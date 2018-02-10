import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userId: {
      type: String,
      required: false
    },
  userHandle: {
      type: String,
      required: false
    },
    firstName: {
      type: String,
      required: false
    },
    lastName: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },
    birthday: {
      type: String,
      required: false
    },
    cityState: {
      type: String,
      required: false
    },
    bio: {
      type: String,
      required: false
    },
    notifications: {
      type: Array,
      required: false
    }

  });


module.exports = mongoose.model("profile", profileSchema);
