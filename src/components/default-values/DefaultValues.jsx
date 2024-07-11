"use client";
import { defaultCart } from "@/lib/features/cart/cartSlice";
import { defaultCounter } from "@/lib/features/counter/counterSlice";
import { wishlistLocal } from "@/lib/features/wishlist/wishlistSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const DefaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wishlistLocal(JSON.parse(localStorage.getItem("wishlist")) || []));
    dispatch(defaultCart(JSON.parse(localStorage.getItem("cart")) || []));
  });
  return null;
};

export default DefaultValues;
