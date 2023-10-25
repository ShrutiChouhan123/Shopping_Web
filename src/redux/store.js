import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './createSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        fev : cartReducer
    }
})

export default store;