import Clean from "@/components/clean/Clean";
import Hero from "@/components/hero/Hero";
import ProductData from "@/components/product-data/ProductData";
import Testimo from "@/components/testimo/Testimo";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductData limit={8} />
      <Clean />
      <Testimo />
      <ProductData limit={4} />
    </div>
  );
}
