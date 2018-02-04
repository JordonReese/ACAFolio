import mongoose from "mongoose";

const schema = new mongoose.Schema({
  activityId: {
   required: false,
   type: String
  },
  userId: {
   required: false,
   type: String
  },
  userName: {
    required: false,
    type: String
  },
  text: {
   required: false,
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
