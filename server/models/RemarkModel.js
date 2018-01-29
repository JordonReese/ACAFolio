import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: {
   required: true,
   type: String
  },
  post: {
   required: true,
   type: String
  },
  dateTime: {
   required: false,
   type: String
  },
  location: {
   required: false,
   type: String
  },
  likesCount: {
   required: false,
   type: String
  }

});

export default mongoose.model("Remark", schema);
