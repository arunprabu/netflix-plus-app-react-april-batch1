// core stuff here
/* 
  1. initial state for the store of this feature,
  2. reducer functions 
  3. actions associated with reducer fns
*/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
  status: "idle",
};

// Let's connect to the rest api -- using thunk because of connecting to rest api
export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsers', // action type prefix -- will have suffix of pending or fulfilled or rejected
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    return response.data; // what we return here will be then payload of action obj
  }
)

export const addUserAsync = createAsyncThunk(
  "users/addUsers", // action type prefix -- will have suffix of pending or fulfilled or rejected
  async (addUserForm) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      addUserForm
    );
    console.log(response.data);
    return response.data; // what we return here will be then payload of action obj
  }
);

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
    // if you want to have async calls handled -- setup the logic for the action suffix here
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        // the store data for this feature
        console.log(state);
        // updating the store
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        // the store data for this feature
        console.log(state);
        console.log(action);
        // updating the store
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        // the store data for this feature
        console.log(state);
        console.log(action);
        // updating the store
        state.isLoading = false;
        state.isError = true;
        state.users = action.payload;
        state.status = "Unable to load users now. Try again later.";
      })
      .addCase(addUserAsync.pending, (state) => {
        // updating the store
        state.isLoading = true;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        // updating the store
        state.isLoading = false;
        state.users = [...state.users, action.payload];
      })
      .addCase(addUserAsync.rejected, (state) => {
        // updating the store
        state.isLoading = false;
        state.isError = true;
        state.status = 'Unable to add user now. Try again later';
      });
  }
});

export default usersSlice.reducer;