import { configureStore } from '@reduxjs/toolkit'
import pizzaReducer from '../features/pizza/pizzaSlice'
import modalReducer from '../features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    modal: modalReducer,
  }
})