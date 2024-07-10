"use client";
import React, { useState } from "react";
import "./header.scss";
import Image from "next/image";
import img from "@/assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="header">
      <nav className="header__nav container">
        <Link href={"/"} className="header__nav__logo">
          <Image width={130} height={40} alt="img" src={img} />
        </Link>
        <ul className={`header__nav__list ${show ? "header__show" : ""}`}>
          <li onClick={() => setShow(false)} className="header__nav__close">
            <MdClose />
          </li>
          <li className="header__nav__item">Discovery</li>
          <li className="header__nav__item">About</li>
          <li className="header__nav__item">Contact us</li>
        </ul>
        <div className="header__nav__icon">
          <FaRegUser />
          <FiShoppingCart />
        </div>
        <div onClick={() => setShow(true)} className="header__nav__menu">
          <AiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
