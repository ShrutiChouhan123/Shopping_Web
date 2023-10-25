import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'cart',
    initialState :{
        cart :[],
        fev : []
    },
    reducers :{
    addTocart : (state,actions)=>{
        state.cart.push(actions.payload)
    },
    fevCart :(state,actions)=>{
        state.fev.push(actions.payload)
    },
    removeCart :(state,actions)=>{
        state.cart = state.cart.filter(x=>x.id!== actions.payload.id)
    },
    removeWishlist :(state,actions)=>{
        state.fev = state.fev.filter(y=>y.id!== actions.payload.id)
    }
    }
})

export default cartSlice.reducer;

export const {addTocart,fevCart,removeCart,removeWishlist}= cartSlice.actions;