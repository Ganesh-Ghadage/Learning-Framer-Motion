import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizza: {
        base: "",
        toppings: [] 
    }
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        addBase: (state, action) => {
            state.pizza = {...state.pizza, base: action.payload}
        },
        addTopping: (state, action) => {
            state.pizza = { ...state.pizza, toppings: action.payload}
        },
        clearPizza: (state) => {
            state.pizza = {base: "", toppings: []}
        }
    }
})

export const {addBase, addTopping, clearPizza} = pizzaSlice.actions

export default pizzaSlice.reducer