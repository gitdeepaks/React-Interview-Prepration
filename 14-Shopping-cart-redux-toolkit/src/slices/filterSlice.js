import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
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
    filterByRating(state, action) {
      state.byRating = action.payload;
    },
    filterBySearch(state, action) {
      state.byRating = action.payload;
    },
    clearFilter(state) {
      state.byStock = false;
      state.byRating = 0;
      state.searchQuery = "";
    },
  },
});

export default filterSlice.reducers;
