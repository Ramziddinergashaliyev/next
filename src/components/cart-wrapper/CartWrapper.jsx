"use client";
import React, { useEffect, useState } from "react";
import "./cartWrapper.scss";
import { useSelector, useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import {
  removeFromCart,
  incrementCart,
  decrementCart,
  decreaseCart,
  increaseCart,
} from "@/lib/features/cart/cartSlice";
import Empty from "../empty/Empty";

function CartWrapper() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="cart container">
      <div className="cart__top__row">
        <h3>PRODUCT</h3>
        <div className="cart__top__row__right">
          <h3>PRICE</h3>
          <h3>QTY</h3>
          <h3>UNIT PRICE</h3>
        </div>
      </div>
      {cartData.length === 0 ? (
        <Empty />
      ) : (
        <div className="cart__bottom">
          {cartData?.map((el) => (
            <div className="cart__bottom__row" key={el.id}>
              <div className="cart__bottom__row-product">
                <button onClick={() => dispatch(removeFromCart(el.id))}>
                  <IoClose />
                </button>
                <div className="cart__bottom__row-product__img">
                  <Image
                    width={100}
                    height={100}
                    alt="img"
                    src={el?.images[0]}
                  />
                </div>
                <p>{el?.title}</p>
              </div>
              <div className="cart__bottom__row__left">
                <div className="cart__bottom__row-info">
                  <p className="cart__hide">PRICE</p>
                  <p>{el?.price}</p>
                </div>
                <div className="cart__bottom__row-info">
                  <p className="cart__hide">QTY</p>
                  <div className="cart__bottom__row-btns">
                    <button onClick={() => dispatch(increaseCart(el))}>
                      +
                    </button>
                    <span>{el.quantity}</span>
                    <button
                      disabled={el.quantity <= 0}
                      onClick={() => dispatch(decreaseCart(el))}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="cart__bottom__row-info">
                  <p className="cart__hide">UNIT</p>
                  <p>{el?.price * el.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartWrapper;
