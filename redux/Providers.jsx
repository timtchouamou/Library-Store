// this file It wraps our app with the Redux store
// any component in our app can:
// Access the store via useSelector
// and Dispatch actions via useDispatch

'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

export default function Providers({ children }) {
  return (
    <Provider store={store}>
{children}
    </Provider>
  )
}
