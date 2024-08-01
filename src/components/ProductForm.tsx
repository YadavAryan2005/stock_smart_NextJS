"use client";
import { storeProduct } from "@/utils/actions";
import { ChangeEvent, FormEvent, useState } from "react";
function ProductForm() {
  const [product, setProduct] = useState({
    Name: "",
    Description: "",
    Price: "",
    Qty: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await storeProduct(product);
  };
  return (
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
            id='price'
            value={product.Price}
            onChange={(e) => handleChange(e)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter product price'
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
            value={product.Qty}
            onChange={(e) => handleChange(e)}
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
  );
}
export default ProductForm;
