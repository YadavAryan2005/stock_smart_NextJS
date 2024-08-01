import mongoose, { Schema, Types } from "mongoose";
export interface ProductI {
  _id?: Types.ObjectId;
  email?: string;
  Name: string;
  Description: string;
  Price: string;
  Qty: string;
}
const productSchema = new Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Price: { type: String, required: true },
  Qty: { type: String, required: true },
});

export default mongoose.models?.products ||
  mongoose.model("products", productSchema);
