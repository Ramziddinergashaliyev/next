import React from "react";
import "./singleLoading.scss";

const SingleLoading = () => {
  return (
    <div className="container">
      <div className="singleLoading container">
        <div className="singleLoading__img bg__anim"></div>
        <div className="singleLoading__info">
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleLoading;
