"use client";
import React from "react";
import "./hero.scss";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "@/app/context/slice/counterSlice";

const Hero = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="hero">
      <div className="hero__card">
        <button onClick={() => dispatch(inc())}>inc</button>
        <h1>{state}</h1>
        <button disabled={state === 0} onClick={() => dispatch(dec())}>
          dec
        </button>{" "}
      </div>
    </div>
  );
};

export default Hero;
