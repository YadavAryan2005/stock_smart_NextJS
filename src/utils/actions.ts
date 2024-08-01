"use server";
import product, { ProductI } from "../model/product";
import { connectDB, disconnectDB } from "./dbconnect";

export const storeProduct = async (productData: ProductI) => {
  try {
    await connectDB();

    const product123 = new product(productData);

    await product123.save();
    console.log("Product stored successfully");
  } catch (error) {
    console.error("Error storing data:", error);
  } finally {
    await disconnectDB();
  }
};

export const getProducts = async (): Promise<ProductI[]> => {
  try {
    await connectDB();
    const products: ProductI[] = await product.find();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    await disconnectDB();
  }
};