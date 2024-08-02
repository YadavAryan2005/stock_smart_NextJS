import mongoose, { Schema, Types } from "mongoose";

export interface FeedbackI {
  _id?: Types.ObjectId;
  Name: string;
  email: string;
  mobile: string;
  rating: string;
  sfeedback: string;
  iwebsite: string;
}
const feedbackSchema = new Schema({
  Name: { type: String },
  email: { type: String },
  mobile: { type: String },
  rating: { type: String },
  sfeedback: { type: String },
  iwebsite: { type: String },
});
export default mongoose.models?.feedbacks ||
  mongoose.model("feedbacks", feedbackSchema);
