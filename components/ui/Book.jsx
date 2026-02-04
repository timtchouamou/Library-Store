"use client";
import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import Price from "./Price";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/bookSlice";
import toast from "react-hot-toast";

const Book = ({book}) => {

    const [img, setImg] = useState();

    useEffect(() => {
        const image = new Image();
        image.src = book.url;
        image.onload = () => {

            setTimeout(() => { 
                    setImg(image);     
                },2000);
        }
      
    })

                            // fix dispatch function
  const dispatch = useDispatch();


                            // this block is to handle add to cart button click, dispatching addToCart action, and showing toast notification
  function handleAddItemToCart() {
    console.log(" clicked add to cart", book);
    dispatch(addToCart(book));
      toast.success("book added successfully");
   
  }

return(

    <div className="book">

        {img ? (
         <>
         <Link href={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
            <img src={img.src} alt="" className="book__img" />
        </figure>
    </Link>

    <div className="book__title">
        <Link href={`/books/${book.id}`} className="book__title--link">
        {book.title}
        </Link>
    </div>
   <Rating rating={book.rating} />
   <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
       <button onClick={handleAddItemToCart}
    className="btn flex items-center gap-2">
    Add to Cart
  </button>

        </>
        ): (
            <>
             <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
            </>
        )

        }
       
</div>
)     
}
export default Book;