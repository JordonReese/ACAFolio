import mongoose from "mongoose";

const schema = new mongoose.Schema({
  activityId: {
   required: true,
   type: String
  },
  userId: {
   required: true,
   type: String
  },
  comment: {
   required: true,
   type: String
  },
  dateTime: {
   required: false,
   type: String
  },
  likesCount: {
   required: false,
   type: String
  }

});

export default mongoose.model("comment", schema, "comments");
