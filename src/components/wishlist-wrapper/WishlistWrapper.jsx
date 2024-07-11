"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

import "./wishlistWrapper.scss";
import Empty from "../empty/Empty";

const WishlistWrapper = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);
  const dispatch = useDispatch();
  return (
    <div className="product">
      {wishlist.length === 0 ? (
        <Empty />
      ) : (
        <div style={{ marginTop: "20px" }} className="product__cards container">
          {wishlist?.map((el) => (
            <div key={el.id} className="product__card">
              <div className="product__icon">
                <button onClick={() => dispatch(toggleHeart(el))}>
                  {wishlist?.some((list) => list.id === el.id) ? (
                    <FaHeart color="green" />
                  ) : (
                    <IoIosHeartEmpty color="green" />
                  )}
                </button>
                <button>
                  <BsCart2 />
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
      )}
    </div>
  );
};

export default WishlistWrapper;
