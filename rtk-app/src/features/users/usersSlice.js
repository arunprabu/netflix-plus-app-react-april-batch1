// core stuff here
/* 
  1. initial state for the store of this feature,
  2. reducer functions 
  3. actions associated with reducer fns
*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
  status: "idle",
};

// Let's create slice for the Users feature
/* A function that accepts an initial state, 
  an object full of reducer functions, 
  and a "slice name", 
  and automatically generates action creators and 
  action types that correspond to the reducers and state.
*/
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: { 
    // if you want to have sync logic you can have here
  },
  extraReducers: (builder) => {
    // if you want to have ajax calls setup the stuff here
  }
});

export default usersSlice.reducer;