import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (!existingProduct) {
                state.cart.push(product);
            }
        },
        removeFromCart: (state, action) => {
            console.log("cart");
            const productId = action.payload;
            state.cart = state.cart.filter((item) => item.id !== productId);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

//----- calculate total amount ---------
export const selectCartTotal = (state) => {
    return state.cart.cart.reduce((total, product) => total + product.price, 0);
};

export default cartSlice.reducer;