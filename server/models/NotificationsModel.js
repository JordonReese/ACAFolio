import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema({
  fromUserHandle: {
    type: String,
    required: false
  },
  notification: {
    type: String,
    required: false
  },
  dateTime: {
    type: String,
    required:false
  }

});

export default mongoose.model("Notification", notificationSchema)
