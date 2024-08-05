import mongoose, { Schema, Types } from "mongoose";
export interface userI {
  _id: Types.ObjectId;
  email: String;
  image: String;
  name: String;
}
const userSchema = new Schema({
  email: String,
  image: String,
  name: String,
});
export default mongoose.models?.users || mongoose.model("users", userSchema);
