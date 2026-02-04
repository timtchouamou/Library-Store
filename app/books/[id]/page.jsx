'use client';
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Rating from "@/components/ui/Rating";
import Price from "@/components/ui/Price";
import { books as booksData } from "../../../data"; 
import Book from "@/components/ui/Book";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/bookSlice";
import toast from "react-hot-toast";


const BookInfo = () => {

  const { id } = useParams();

  const book = booksData.find((book) => +book.id === +id);

  const [added, setAdded] = useState(false);


   // fix dispatch function
  const dispatch = useDispatch();

                              // this block is to handle add to cart button click, dispatching addToCart action, and showing toast notification
  function handleAddItemToCart() {
    console.log(" clicked add to cart", book);
    dispatch(addToCart(book));
      toast.success("book added successfully");
      setAdded(true);
  }




  return (
    <div id="books__body">
      <main id="books__main">
        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <Link href="/books" className="book__link">
               <ArrowLeft />
              </Link>
              <Link href="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--decription">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum quidem, sint, atque labore veritatis laborum non
                    doloribus consequatur nihil itaque adipisci quisquam quae,
                    repellendus in minus inventore cumque aperiam expedita.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum quidem, sint, atque labore veritatis laborum non
                    doloribus consequatur nihil itaque adipisci quisquam quae,
                    repellendus in minus inventore cumque aperiam expedita.
                  </p>
                </div>

                {added ? (
                  <Link href={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button onClick={handleAddItemToCart} className="btn">
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommanded Books</h2>
            </div>
            <div className="books">
              {booksData
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
