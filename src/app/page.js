import Clean from "@/components/clean/Clean";
import Hero from "@/components/hero/Hero";
import Product from "@/components/product/Product";
import Testimo from "@/components/testimo/Testimo";
import Image from "next/image";

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
