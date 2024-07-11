import { getData } from "@/api/fetchData";
import Single from "@/components/single/Single";
import React from "react";

const Detail = async ({ params }) => {
  const { id } = params;
  return (
    <div>
      <Single id={id} />
    </div>
  );
};

export default Detail;
