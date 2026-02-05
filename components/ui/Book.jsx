"use client";

import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import Price from "./Price";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/bookSlice";
import toast from "react-hot-toast";

const Book = ({ book }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const dispatch = useDispatch();

  // Preload image safely (runs only when URL changes)
  useEffect(() => {
    if (!book?.url) return;

    const image = new window.Image();
    image.src = book.url;

    image.onload = () => {
      // Optional skeleton delay
      setTimeout(() => {
        setImgLoaded(true);
      }, 1000);
    };
  }, [book?.url]);

  // Add to cart handler
  const handleAddItemToCart = () => {
    if (!book) return;

    console.log("clicked add to cart", book);
    dispatch(addToCart(book));
    toast.success("Book added successfully");
  };

  return (
    <div className="book">
      {imgLoaded && book ? (
        <>
          <Link href={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={book.url}
                alt={book.title || "Book"}
                className="book__img"
              />
            </figure>
          </Link>

          <div className="book__title">
            <Link
              href={`/books/${book.id}`}
              className="book__title--link"
            >
              {book.title}
            </Link>
          </div>

          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />

          <button
            onClick={handleAddItemToCart}
            className="btn flex items-center gap-2"
          >
            Add to Cart
          </button>
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
