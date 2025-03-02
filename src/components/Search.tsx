import { ProductI } from "@/model/product";
import { ChangeEvent, useState } from "react";

interface SearchProps {
  products: ProductI[];
  setUpdateProduct: (product: ProductI | null) => void;
}

const Search: React.FC<SearchProps> = ({ products, setUpdateProduct }) => {
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

  const updateProduct = () => {
    if (selectedProduct) {
      setUpdateProduct(selectedProduct);
      setSearchTerm("");
    }
  };

  const selected = (product: ProductI) => {
    setSelectedProduct(product);
    setFilteredProducts([]);
    setSearchTerm(product.Name);
  };

  return (
    <div className='w-full mx-auto mt-20 bg-white px-8 rounded-lg'>
      <h1 className='text-2xl font-bold mb-6'>Search a Product</h1>
      <div className='relative'>
        <div className='flex shadow appearance-none border-2 rounded text-gray-700 leading-tight'>
          <input
            type='text'
            value={searchTerm}
            onChange={handleSearchChange}
            className='rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500'
            placeholder='Search for a product'
          />
          <button
            className='px-4 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-md m-1'
            onClick={updateProduct}
          >
            Update
          </button>
        </div>
        {filteredProducts.length > 0 && (
          <ul className='absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md mt-1 max-h-60'>
            {filteredProducts.map((product, index) => (
              <li
                key={index}
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
                  <h1 className=''>{product.Qty}</h1>
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
