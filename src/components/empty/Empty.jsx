import Image from "next/image";
import React from "react";

const Empty = () => {
  return (
    <div
      style={{
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        width={200}
        height={200}
        alt="img"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sHaROHxTFP-5ML93DYUVCYXIdM-WbSxaBQ&s"
        }
      />
    </div>
  );
};

export default Empty;
