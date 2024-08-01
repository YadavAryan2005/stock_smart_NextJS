"use client";
import { ProductI } from "@/model/product";
import { getProducts } from "@/utils/actions";
import { useEffect, useState } from "react";

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<ProductI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='overflow-x-auto overflow-y-clip bg-white p-8 rounded-lg'>
      <h1 className='text-2xl font-bold mb-6'>Display Current Stock</h1>
      {products.length > 0 ? (
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 border'>Name</th>
              <th className='py-2 px-4 border'>Description</th>
              <th className='py-2 px-4 border'>Price</th>
              <th className='py-2 px-4 border'>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className='py-2 px-4 border border-gray-300'>
                  {product?.Name}
                </td>
                <td className='py-2 px-4 border border-gray-300'>
                  {product.Description}
                </td>
                <td className='py-2 px-4 border border-gray-300'>
                  {product.Price}
                </td>
                <td className='py-2 px-4 border border-gray-300'>
                  {product.Qty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='text-center py-4 text-gray-500 md:text-2xl font-serif'>
          No stock available
        </div>
      )}
    </div>
  );
};

export default ProductTable;
