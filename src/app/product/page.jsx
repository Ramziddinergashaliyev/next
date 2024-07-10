import { getData } from "@/api/fetchData";
import ProductData from "@/components/product-data/ProductData";
import React from "react";

const Product = async ({ limit }) => {
  const data = await getData("/products");
  return (
    <div>
      <ProductData limit={limit} data={data} />
    </div>
  );
};

export default Product;
