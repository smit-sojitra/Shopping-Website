import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CardSlice";


export const Store = configureStore({
    reducer:{
        cart:CartSlice.reducer
    }
})