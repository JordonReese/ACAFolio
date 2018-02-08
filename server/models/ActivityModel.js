import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: {
    type: String,
    required: false
  },
  userHandle: {
    type: String,
    required: false
  },
  post: {
    type: String,
    required: false
  },
  dateTime: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  likesCount: {
    type: String,
    required: false
  },
  comments: {
    type: Array,
    required: false
  },
  showComments: {
    type: Boolean,
    required: false
  }
});

export default mongoose.model("Activity", schema, "activityfeed");
