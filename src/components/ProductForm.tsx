"use client";
import { ProductI } from "@/model/product";
import { storeProduct } from "@/utils/actions";
import { notification } from "antd";
import { useSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
function ProductForm(
  this: any,
  { updateProduct }: { updateProduct: ProductI | null }
) {
  const { data: session, status } = useSession();
  const [api, contextHolder] = notification.useNotification();
  const [product, setProduct] = useState({
    Name: "",
    email: session?.user?.email as string,
    Description: "",
    Price: "",
    Qty: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleNumberInput = (e: any) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setProduct({ ...product, [e.target.name]: value });
    if (value === 0) {
      setProduct({ ...product, [e.target.name]: "" });
    }
  };
  console.log("product.Price", product.Price);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await storeProduct(product);
    if (data === "success") {
      api["success"]({
        message: "New Product Added",
        description: "Your Product added successfully",
        showProgress: true,
        duration: 3,
        closeIcon: false,
      });
      clearForm();
      setTimeout(() => window.location.reload(), 3000);
    } else if (data === "updated") {
      api["success"]({
        message: "Your Product Updated",
        description: "Your Product Upadated successfully",
        showProgress: true,
        duration: 3,
        closeIcon: false,
      });
      clearForm();
      setTimeout(() => window.location.reload(), 3000);
    } else {
      api["error"]({
        message: "Product Upload Failed",
        description:
          "We encountered an issue adding your Product. Please try again.",
        showProgress: true, // Progress bar isn't usually needed for errors
        duration: 3, // 5 seconds
        closeIcon: false,
      });
    }
  };
  useEffect(() => {
    if (updateProduct) {
      setProduct({ ...updateProduct, email: session?.user?.email as string });
    }
  }, [updateProduct]);
  function imposeMinMax(el: any) {
    if (el.value != "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  }
  const clearForm = () => {
    setProduct({
      Name: "",
      email: session?.user?.email as string,
      Description: "",
      Price: "",
      Qty: "",
    });
  };
  return (
    <>
      {" "}
      {contextHolder}
      <div className='mx-auto mt-3'>
        <form
          className='bg-white p-8 rounded-lg'
          onSubmit={(e) => handleSubmit(e)}
        >
          <h2 className='text-2xl font-bold mb-6 '>Add New Product</h2>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Product Name
            </label>
            <input
              type='text'
              name='Name'
              id='name'
              value={product.Name}
              onChange={(e) => handleChange(e)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter product name'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='description'
            >
              Description
            </label>
            <textarea
              name='Description'
              id='description'
              value={product.Description}
              onChange={(e) => handleChange(e)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter product description'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='price'
            >
              Price
            </label>
            <input
              type='number'
              name='Price'
              min={0}
              max={1000000}
              id='price'
              value={product.Price}
              onChange={(e) => handleNumberInput(e)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter product price'
              // onKeyUp={(el) => imposeMinMax(el)}
              required
            />
          </div>

          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='category'
            >
              Quantity
            </label>
            <input
              type='number'
              name='Qty'
              id='quantity'
              min={0}
              max={1000000}
              value={product.Qty}
              onChange={(e) => handleNumberInput(e)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter product quantity'
              required
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ProductForm;
