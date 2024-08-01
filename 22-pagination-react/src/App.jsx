import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pagination from "./components/Pagination";

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
        <Pagination products={products} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default App;
