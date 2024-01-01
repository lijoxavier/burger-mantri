import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    cart: [],
    count: 0,
    total: 0
}

// Helper function to track count and total
const updateCountAndTotal = (_state)=>{
   _state.count = _state.cart.reduce((acc,curr)=>acc+curr.quantity,0);
   _state.total = _state.cart.reduce((acc,curr)=>acc+(curr.quantity * curr.price),0).toFixed(2);

}
const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload);
            updateCountAndTotal(state);
        },
        updateQuantity:(state,action)=>{
            const selectedProduct = state.cart.find((item)=>item.id === action.payload.id);
            selectedProduct.quantity+=action.payload.num;
            updateCountAndTotal(state);
        },
        deleteProduct:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload);
            updateCountAndTotal(state);
        }
    }
})

export const {addToCart,updateQuantity,deleteProduct} =  cartSlice.actions
export default cartSlice.reducer