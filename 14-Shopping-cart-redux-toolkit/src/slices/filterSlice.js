import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    byStock: false,
    byRating: 0,
    searchQuery: "",
  },
  reducers: {
    sortByPrice(state, action) {
      state.sort = action.payload;
    },
  },
});
