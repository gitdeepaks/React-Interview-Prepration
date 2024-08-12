import React, { useState, useEffect, useReducer, useRef } from "react";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "getItemsStart": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "getItemsSuccess": {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("State", state);

  useEffect(() => {
    dispatch({ type: "getItemsStart" });
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // setItems({ data: response.data });
      dispatch({ type: "getItemsSuccess", payload: response.data });
    });
  }, []);

  return (
    <div className="">
      {state.isLoading && <div>Loading...</div>}
      <div className="">
        <ul>
          {state.data.map((itm) => {
            return <li key={itm.id}>{itm.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default MyComponent;
