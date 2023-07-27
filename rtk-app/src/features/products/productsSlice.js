/* 
  1. initial state for the store of this feature,
  2. reducer functions 
  3. actions associated with reducer fns
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  productList: [],
  cartItems: [],
  status: 'idle'
}

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts", // action type prefix -- will have suffix of pending or fulfilled or rejected
  async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products'
    );
    console.log(response.data);
    return response.data; // what we return here will be then payload of action obj
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // this will be part of actions
    addToCart: (state, action) => {
      console.log(state); // state is store data rel to this feature
      console.log(action);
      // update the store
      state.cartItems = [...state.cartItems, action.payload];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.status = 'Unable to fetch products. Try again later'
      });
  }
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;