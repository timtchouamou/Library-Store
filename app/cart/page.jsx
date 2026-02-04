"use client";
import React from "react";
import EmptyCart from "../../assets/empty_cart.svg";
import Link from "next/link";
import { Trash2Icon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setQuantity } from "@/redux/slices/bookSlice";
import toast from "react-hot-toast";
import Image from "next/image";


const Cart = () => {
  //1- This block is to get books from redux store and display them in the cart
  //NB: books is what we named bookSlice in the store.js

  const bookItems = useSelector((a) => a.books);
  console.log(bookItems);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log("Remove book with id:", id);
    dispatch(removeFromCart(id));
    toast.success("book removed successfully");
  };

 const setCartQuantity = (id, quantity) => {
    dispatch(setQuantity({ id, quantity }));
      toast.success("book quantity updated successfully");
  };

  return (
    <div id="books__body">
      <main className="books__main">
        {/* If cart is empty */}
        {bookItems.length === 0 ? (
          // return this
          <div className="cart__empty">
            <Image
              src={EmptyCart}
              alt="Empty Cart"
              className="cart__empty--img"
            />
            <h2>You don&apos;t have any books in your cart!</h2>
            <Link href="/books">
              <button className="btn">Browse books</button>
            </Link>
          </div>
        ) : (
          // if not, return this
          <div className="books__container">
            <div className="row">
              <div className="book_selected--top">
                <h2 className="cart__title">Cart</h2>
              </div>

              <div className="cart">
                {/* Cart Header */}
                <div className="cart__header">
                  <span className="cart__book">Book</span>
                  <span className="cart__quantity">Quantity</span>
                  <span className="cart__total">Price</span>
                </div>

                <div className="cart__body">
                  {bookItems.map((book) => (
                    <div className="cart__item" key={book.id}>
                      {/* image, title & Price */}
                      <div className="cart__book">
                        <Image
                          src={book.url}
                          className="cart__book--img"
                          alt="book"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            ${book.originalPrice}
                          </span>
                          <button
                            onClick={() => handleRemove(book.id)}
                            className="cart__book--remove"
                          >
                            <Trash2Icon />
                          </button>
                        </div>
                      </div>
                      {/* input number */}
                      <div className="cart__quantity">
                      
                        <input
                          type="number"
                          min={1}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(e) =>
                            setCartQuantity(book.id, Number(e.target.value))  
                           
                          }
                        />
                      
                      </div>
                      {/* total price per book */}
                      <div className="cart__total">
                        ${book.originalPrice * book.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="total">
                {/*total with tax */}
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>
                    $
                    {bookItems.reduce(
                      (acc, book) => acc + book.originalPrice * book.quantity,
                      0,
                    )}
                  </span>
                </div>

                {/* tax */}
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>
                    $
                    {(
                      bookItems.reduce(
                        (acc, book) => acc + book.originalPrice * book.quantity,
                        0,
                      ) * 0.1
                    ).toFixed(2)}
                  </span>
                </div>

                {/*total with tax */}
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>
                    $
                    {(
                      bookItems.reduce(
                        (acc, book) => acc + book.originalPrice * book.quantity,
                        0,
                      ) * 1.1
                    ).toFixed(2)}
                  </span>
                </div>

                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert(`Haven't got around to doing this :(`)}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
