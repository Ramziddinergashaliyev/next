"use client";
import React from "react";
import "./product.scss";
import Image from "next/image";
import Link from "next/link";
import { useGetProductsQuery } from "@/lib/api/productApi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import { FaHeart } from "react-icons/fa";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { FaCartShopping } from "react-icons/fa6";

const ProductData = ({ limit }) => {
  const { data, isLoading } = useGetProductsQuery({ limit });
  const wishlist = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();
  return (
    <div className="product container">
      <h3 className="product__title">Products</h3>
      <p className="product__text">
        Order it for you or for your beloved ones{" "}
      </p>
      <div className="product__cards">
        {data?.products?.map((el) => (
          <div key={el.id} className="product__card">
            <div className="product__icon">
              <button onClick={() => dispatch(toggleHeart(el))}>
                {wishlist?.some((list) => list.id === el.id) ? (
                  <FaHeart color="green" />
                ) : (
                  <IoIosHeartEmpty color="green" />
                )}
              </button>
              <button onClick={() => dispatch(addToCart(el))}>
                {cartData?.some((cart) => cart.id === el.id) ? (
                  <FaCartShopping color="green" />
                ) : (
                  <BsCart2 color="green" />
                )}
              </button>
            </div>
            <Link href={`/product/${el?.id}`} className="product__card__img">
              <Image width={150} height={150} alt="img" src={el?.images[0]} />
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

export default ProductData;
