const Search = () => {
  return (
    <div className='w-full mx-auto mt-20 bg-white px-8 rounded-lg '>
      <h1 className='text-2xl font-bold mb-6 '>Search a Product</h1>
      <div className='relative'>
        <input
          type='text'
          //   value={searchTerm}
          //   onChange={handleSearchChange}
          className='shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500  '
          placeholder='Search for a product'
        />
        {/* {filteredProducts.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md mt-1 max-h-60 ">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="py-2 rounded-md cursor-pointer flex hover:bg-gray-100 gap-3 justify-between px-3"
                onClick={() => handleProductSelect(product)}
              >
                <div className="flex">
                  <b>{product.name}</b>
                  <h1>
                    {"(" +
                      product.quantity +
                      " available for ₹" +
                      product.price +
                      ")"}
                  </h1>
                </div>
                <div className="flex">
                  <button
                    className="px-4 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-md"
                    onClick={() => updateProduct(product)}
                  >
                    -
                  </button>
                  <h1 className="w-10">{product.quantity}</h1>
                  <button
                    className="px-4 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-md"
                    onClick={() => updateProduct}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default Search;
