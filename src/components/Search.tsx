"use client";
import { ProductI } from "@/model/product";
import { ChangeEvent, useState } from "react";
const Search = ({ products }: { products: ProductI[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductI | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.Name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredProducts([]);
    }
  };
  const selected = (product: ProductI) => {
    setSelectedProduct(product);
    setFilteredProducts([]);
    setSearchTerm(product.Name);
  };
  return (
    <div className='w-full mx-auto mt-20 bg-white px-8 rounded-lg '>
      <h1 className='text-2xl font-bold mb-6 '>Search a Product</h1>
      <div className='relative'>
        <div className='flex shadow appearance-none border-2 rounded text-gray-700 leading-tight '>
          <input
            type='text'
            value={searchTerm}
            onChange={handleSearchChange}
            className='  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500  '
            placeholder='Search for a product'
          />
          <button className='px-4 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-md m-1'>
            Update
          </button>
        </div>
        {filteredProducts.length > 0 && (
          <ul className='absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md mt-1 max-h-60 '>
            {filteredProducts.map((product) => (
              <li
                key={product._id}
                className='py-2 rounded-md cursor-pointer flex hover:bg-gray-100 gap-3 justify-between px-3'
                onClick={() => selected(product)}
              >
                <div className='flex'>
                  <b>{product.Name}</b>
                  <h1 className='hidden md:block'>
                    {"(" +
                      product.Qty +
                      " available for ₹" +
                      product.Price +
                      ")"}
                  </h1>
                </div>
                <div className='flex'>
                  <button className='px-4 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-md'>
                    -
                  </button>
                  <h1 className='w-10'>{product.Qty}</h1>
                  <button className='px-4 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-md'>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
