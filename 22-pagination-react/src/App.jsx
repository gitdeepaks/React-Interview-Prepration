import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [products, setproducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);

  async function fetchProducts() {
    const res = await axios.get(`https://dummyjson.com/products?limit=100`);
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
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </span>

          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < products.length / 10 ? "" : "pagination__disable"}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
