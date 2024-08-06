import { createContext, useContext, useEffect, useReducer } from "react";
import { filterReducer, shoppingCardReducer } from "./reducer";
import axios from "axios";

const ShoppingCart = createContext();

const Context = ({ children }) => {
  // product state
  const [state, dispatch] = useReducer(shoppingCardReducer, {
    products: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: "",
  });

  const fetchProducts = async () => {
    const res = await axios.get("/products.json");
    const data = await res.data;

    if (data && data.products) {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: data.products,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <ShoppingCart.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};

export const ShoppingCartState = () => {
  return useContext(ShoppingCart);
};

export default Context;
