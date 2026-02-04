// configureStore is a helper function that: 
// Creates the Redux store (the place where all your state lives).
// Automatically sets up good defaults, like:
// redux-thunk for async actions
// DevTools integration
// Combining reducers

import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice"


//create a store and give it reducers
export const store = configureStore({
  // slices of state will go here
  reducer: {
   books: bookSlice
  },
});
