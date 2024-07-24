import { useSearchParams } from "react-router-dom";
// import { ShoppingCartState } from "../context/context";
import StarRating from "./star-rating";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByPrice,
  filterByRating,
  filterBySearch,
  filterByStock,
  clearFilter,
} from "../slices/filterSlice";

const filterMap = {
  sort: sortByPrice,
  byRating: filterByRating,
  byStock: filterByStock,
  searchQuery: filterBySearch,
};

const Filters = () => {
  // const { filterState, filterDispatch } = ShoppingCartState();

  const filterDispatch = useDispatch();
  const filterState = useSelector((state) => state.filters);
  const { byStock, sort, byRating } = filterState;

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size) {
      searchParams.forEach((value, key) => {
        // filterDispatch({
        //   type: filterMap[key],
        //   payload: value,
        // });
        filterDispatch(filterMap[key](value));
      });
    }
  }, []);

  useEffect(() => {
    setSearchParams(filterState);
  }, [filterState]);

  return (
    <div className="flex flex-col w-96 gap-2">
      <span className="font-bold">Filter Products</span>
      <span>
        <input
          type="radio"
          className="mr-2"
          id="Ascending"
          name="sort"
          onChange={() => filterDispatch(sortByPrice("lowToHigh"))}
          checked={sort === "lowToHigh" ? true : false}
        />
        <label htmlFor="Ascending">Ascending</label>
      </span>
      <span>
        <input
          type="radio"
          className="mr-2"
          id="descending"
          name="sort"
          onChange={() => filterDispatch(sortByPrice("highToLow"))}
          checked={sort === "highToLow" ? true : false}
        />
        <label htmlFor="descending">Descending</label>
      </span>

      <span>
        <input
          type="checkbox"
          className="mr-2"
          id="outofstock"
          name="outofstock"
          onChange={() => filterDispatch(filterByStock(!byStock))}
          checked={byStock}
        />
        <label htmlFor="outofstock">Include Out of Stock</label>
      </span>

      <span className="flex items-center">
        <label className="pr-2">Rating</label>
        <StarRating
          rating={byRating}
          onChange={(i) => filterDispatch(filterByRating(i))}
        />
      </span>
      <button
        className="bg-slate-500 text-white rounded-sm"
        onClick={() => filterDispatch(clearFilter())}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
