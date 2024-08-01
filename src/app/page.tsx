import ProductForm from "@/components/ProductForm";
import ProductTable from "@/components/ProductTable";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-16">
      <Search/>
      <ProductForm/>
      <ProductTable/>
    </main>
  );
}
