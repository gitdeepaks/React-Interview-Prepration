import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsAsync = createAsyncThunk(
  "cart/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`/products.json`);
      const data = await res.json();
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    cart: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addToCart(state, action) {
      state.cart.push({ ...action.payload, qty: 1 });
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((itm) => itm.id !== action.payload.id);
    },
    changeCartQuantity(state, action) {
      const { id, qty } = action.payload;
      const product = state.cart.find((itm) => itm.id === id);
      if (product) {
        product.qty = qty;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.status = "loading";
    });
    builder
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.product = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.product = "idle";
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, changeCartQuantity } =
  cardSlice.actions;

export default cardSlice.reducer;
