import React from "react";
import { ShoppingCartState } from "../context/context";

function Filters() {
  const { filterState, filterDispatch } = ShoppingCartState();
  const { byStock, sort, byRating } = filterState;
  return (
    <div className="flex flex-col w-96 gap-2">
      <span className="font-bold">Filter products</span>
      <span>
        <input
          className="mr-2"
          type="radio"
          value=""
          id="Ascending"
          name="sort"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        <label htmlFor="Ascending">Ascending</label>
      </span>
      <span>
        <input
          className="mr-2"
          type="radio"
          value=""
          id="Decending"
          name="sort"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
        <label htmlFor="Decending">Decending</label>
      </span>
      {/* 28:54 */}
    </div>
  );
}

export default Filters;
