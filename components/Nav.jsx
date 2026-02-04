"use client";
import React from "react";
import LibraryLogo from "../assets/Library.svg";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";

<assets />;

const Nav = () => {

//1- This block is to get books from redux store and display them in the cart
//NB: books is what we named bookSlice in the store.js
 
  const bookItems = useSelector((a) => a.books);
  console.log(bookItems);



  function openMenu() {
    // document.body.classList += " menu--open"
    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <>
      <div className="nav__container">
        <Link href="/">
          <Image src={LibraryLogo} alt="" className="logo" />
        </Link>

        <ul className="nav__links">
          <li className="nav__list">
            <Link href="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link href="/books" className="nav__link">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <Menu size={24} />
          </button>
          <li className="nav__icon">
            <Link href="/cart" className="nav__link">
              <ShoppingCart />
            </Link>
            ({bookItems.length})
          </li>
        </ul>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <X />
          </button>
          <ul className="menu__links">
            <li className="memu__list">
              <Link href="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="memu__list">
              <Link href="/books" className="menu__link">
                Books
              </Link>
            </li>
            <li className="memu__list">
              <Link href="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;

// THIS const Nav = () => {}Nav() EGAL TO THIS function Nav() {}Nav()
// <div></div> EGAL to <></>
