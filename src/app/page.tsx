"use client";
import ProductForm from "@/components/ProductForm";
import ProductTable from "@/components/ProductTable";
import Search from "@/components/Search";
import { ProductI } from "@/model/product";
import { getProducts } from "@/utils/actions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [updateProduct, setUpdateProduct] = useState<ProductI | null>(null);
  const { data: session, status } = useSession();

  useLayoutEffect(() => {
    if (status !== "authenticated") {
      return redirect("/login");
    }
  }, []);
  const fetchData = async () => {
    try {
      const data = await getProducts(session?.user?.email as string);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className='mt-16 mb-10'>
      <Search products={products} setUpdateProduct={setUpdateProduct} />
      <ProductForm updateProduct={updateProduct} />
      <ProductTable products={products} />
    </main>
  );
}
