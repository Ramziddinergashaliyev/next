import React from "react";
import "./loading.scss";

const Loading = () => {
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

export default Loading;
