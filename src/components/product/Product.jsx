"use client";
import React from "react";
import "./product.scss";
import Image from "next/image";
import { PRODUCT } from "@/static";
import Link from "next/link";

const Product = ({ limit }) => {
  return (
    <div className="product container">
      <h3 className="product__title">Products</h3>
      <p className="product__text">
        Order it for you or for your beloved ones{" "}
      </p>
      <div className="product__cards">
        {PRODUCT?.slice(0, limit)?.map((el) => (
          <div key={el.id} className="product__card">
            <Link href={`/product/${el?.id}`} className="product__card__img">
              <Image width={150} height={150} alt="img" src={el?.img} />
            </Link>
            <div className="product__card__info">
              <h3>{el?.title}</h3>
              <p>{el?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
