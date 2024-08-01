"use client";
import ProductForm from "@/components/ProductForm";
import ProductTable from "@/components/ProductTable";
import Search from "@/components/Search";
import { ProductI } from "@/model/product";
import { getProducts } from "@/utils/actions";
import { useEffect, useState } from "react";

export default function Home() {
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
    <main className='mt-16'>
      <Search products={products}/>
      <ProductForm />
      <ProductTable products={products} />
    </main>
  );
}
