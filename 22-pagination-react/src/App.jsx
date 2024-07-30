import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [products, setproducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);

  async function fetchProducts() {
    const res = await axios.get(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.data;
    if (data && data.products) {
      setproducts(data.products);
      settotalPages(Math.ceil(data.total / 10));
    }
  }

  useEffect(
    function () {
      fetchProducts();
    },
    [page]
  );

  function selectPageHandler(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  }
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((prd) => {
            return (
              <span className="products__single" key={prd.id}>
                <img src={prd.thumbnail} alt={prd.title} />
                <span>{prd.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => page > 1 && selectPageHandler(page - 1)}
            disabled={page <= 1}
          >
            ⏮️
          </span>
          {[...Array(Math.ceil(products.length / 10))].map((_, index) => (
            <span
              className={page === index + 1 ? "pagination__selected" : ""}
              onClick={() => selectPageHandler(index + 1)}
              key={index}
            >
              {index + 1}
            </span>
          ))}
          <span
            onClick={() =>
              page < Math.ceil(products.length / 10) &&
              selectPageHandler(page + 1)
            }
            disabled={page >= Math.ceil(products.length / 10)}
          >
            ⏭️
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
