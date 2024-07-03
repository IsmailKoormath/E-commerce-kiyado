import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// -------- get all products ---------
export const allproductsApi = createAsyncThunk(
    "products/allproductApi",
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response);
        return response.data;
    }
);

// -------- get all categories ------------

export const categoriesApi = createAsyncThunk(
    "products/categoriesApi",
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        return response.data;
    }
);

const initialState = {
    products: [],
    categories: [],
    loading: false,
};

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(allproductsApi.pending, (state) => {
            state.loading = true;
            console.log("get all products pending");
        }).addCase(allproductsApi.fulfilled, (state, action) => {
            state.products = action.payload;
            console.log("get all products fulfilled");
        }).addCase(allproductsApi.rejected, (state, action) => {
            state.loading = false
            console.log("get all products rejected");

        })
    }
});
export default ProductSlice.reducer;