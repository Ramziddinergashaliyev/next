import Clean from "@/components/clean/Clean";
import Hero from "@/components/hero/Hero";
import ProductData from "@/components/product-data/ProductData";
import Testimo from "@/components/testimo/Testimo";
import Image from "next/image";
import Product from "./product/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Product limit={8} />
      <Clean />
      <Testimo />
      <Product limit={4} />
    </div>
  );
}
