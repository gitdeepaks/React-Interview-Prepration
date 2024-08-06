import React, { useState } from "react";
import { ShoppingCartState } from "../context/context";
import Pagination from "../components/Pagination";
import StarRating from "../components/StarRating";
import Filters from "../components/Filters";

function Home() {
  const [page, setPage] = useState(1);
  const {
    state: { products },
  } = ShoppingCartState();

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="py-9 flex">
        {/* FILTERS */}
        <Filters />

        {/* Products */}
        {products.length > 0 ? (
          <div className="products w-full">
            {products.slice(page * 10 - 10, page * 10).map((prod) => (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
                <hr />
                <span>${prod.price}</span>
                <StarRating rating={prod.rating} />
              </span>
            ))}
          </div>
        ) : (
          <div>No products found.</div>
        )}
      </div>
      {products.length > 0 && (
        <Pagination products={products} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default Home;
