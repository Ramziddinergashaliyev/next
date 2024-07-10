import { getData } from "@/api/fetchData";
import Single from "@/components/single/Single";
import React from "react";

const Detail = async ({ params }) => {
  const { id } = params;
  const detailsData = await getData(`/products/${id}`);
  return (
    <div>
      <Single product={detailsData} />
    </div>
  );
};

export default Detail;
