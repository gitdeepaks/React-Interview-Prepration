import React from "react";
import { ShoppingCartState } from "../context/context";
import StarRating from "./StarRating";

function Filters() {
  const { filterState, filterDispatch } = ShoppingCartState();
  const { byStock, sort, byRating } = filterState;

  const handleClearFilters = () => {
    console.log("Clear Filters button clicked");
    filterDispatch({
      type: "CLEAR_FILTER",
    });
  };

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
      <span>
        <input
          className="mr-2"
          type="checkbox"
          value=""
          id="outofsong"
          name="outofstock"
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_STOCK",
              payload: !byStock,
            })
          }
          checked={byStock}
        />
        <label htmlFor="outofsong">Include out of stock</label>
      </span>
      <span className="flex items-center">
        <label className="pr-2">Rating</label>
        <StarRating
          rating={byRating}
          onChange={(i) =>
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: i,
            })
          }
        />
      </span>
      <button
        onClick={handleClearFilters}
        className="bg-sky-500 p-2 text-white rounded-xl"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default Filters;
