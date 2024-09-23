import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggelVisible: (state, action) => {
            state.isVisible = action.payload
        }
    }
})

export const {toggelVisible} = modalSlice.actions;

export default modalSlice.reducer;