"use server";
import feedback, { FeedbackI } from "@/model/feedback";
import User, { userI } from "@/model/user";
import product, { ProductI } from "../model/product";
import { connectDB, disconnectDB } from "./dbconnect";

export const storeProduct = async (productData: ProductI) => {
  try {
    await connectDB();
    if (productData._id) {
      await product.updateOne({ _id: productData._id }, productData);
      console.log("Product updated successfully");
      return "updated";
    }
    const product123 = new product(productData);
    await product123.save();
    console.log("Product stored successfully");
    return "success";
  } catch (error) {
    console.error("Error storing data:", error);
  } finally {
    await disconnectDB();
  }
};

export const getProducts = async (email?: string): Promise<ProductI[]> => {
  try {
    await connectDB();
    const products: ProductI[] = await product.find({ email: email });
    console.log("Products fetched successfully");
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    await disconnectDB();
  }
};

export const storeFeedback = async (Feedback: FeedbackI) => {
  try {
    await connectDB();
    const feedback123 = new feedback(Feedback);
    await feedback123.save();
    console.log("Feedback stored successfully");
    return "success";
  } catch (error) {
    console.error("Error storing data:", error);
  } finally {
    await disconnectDB();
  }
};

export const getUsers = async () => {
  try {
    await connectDB();
    const users: userI[] = await User.find();
    console.log("Users fetched successfully");
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  } finally {
    await disconnectDB();
  }
};
export const deleteProduct = async (id: string) => {
  try {
    await connectDB();
    await product.deleteOne({ _id: id });
    return "success";
  } catch (error) {
    console.error("Error deleting product:", error);
  } finally {
    await disconnectDB();
  }
};
