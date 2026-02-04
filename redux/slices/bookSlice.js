// 1-import createSlice from redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// // 2- Create Initial State
const initialState = [];

// 3- Create the slice with Reducers
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
// funtion used to manipulate state

    addToCart: (state, action) => {
// All our logic to add to cart will go here

 // 1- to make sure action.payload and product have same data structure 
      console.log("Adding to cart", action.payload);

      
      // 2- destructure product info from action.payload
      const { id, title, originalPrice, url } = action.payload;

      // 3- check if the book is already in the cart
      const existingBook = state.find((book) => book.id === id);

      if (existingBook) {
        existingBook.quantity += 1;
      } else {
        state.push({ id, title, originalPrice, url, quantity: 1 });
      }
    },

   removeFromCart: (state, action) => {
      const id = action.payload;
      return state.filter((book) => book.id !== id);
    },

//     increaseQuantity: (state, action) => {
//   const book = state.find(b => b.id === action.payload);
//   if (book) book.quantity += 1;
// },

// decreaseQuantity: (state, action) => {
//   const book = state.find(b => b.id === action.payload);
//   if (book && book.quantity > 1) book.quantity -= 1;
// },

setQuantity: (state, action) => {
  const { id, quantity } = action.payload;
  const book = state.find(b => b.id === id);
  if (book) book.quantity = quantity;
},



}
  
});

// 4- export actions (all the reducers)
export const { addToCart, removeFromCart, setQuantity } = bookSlice.actions;


// 5- export reducer (default)
export default bookSlice.reducer;


