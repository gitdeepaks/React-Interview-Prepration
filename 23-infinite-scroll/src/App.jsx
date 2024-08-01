import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState({ products: [] });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${page * 10}`
      );

      const data = res.data.products; // Access products array from response data

      setProducts((prevProducts) => ({
        products: [...prevProducts.products, ...data],
      })); // Append new products
      setPage(page + 1);
      // console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const throttling = (cb, d) => {
      let last = 0;
      return function (...args) {
        let now = new Date().getTime();
        if (now - last < d) return;
        last = now;
        return cb(...args);
      };
    };

    const handleScroll = throttling(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 500 >
          document.documentElement.offsetHeight &&
        !loading &&
        products.limit < products.total
      ) {
        console.log("call api");
        fetchProducts();
      }
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { products: allProducts } = products; // Destructure products

  return (
    <div>
      <h1>Infinite scroll</h1>
      {allProducts.length > 0 && (
        <div className="products">
          {allProducts.map((prd) => {
            return (
              <div className="products__single" key={prd.id}>
                <img src={prd.thumbnail} key={prd.id} alt={prd.title} />
                <span>{prd.title}</span>
              </div>
            );
          })}
        </div>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
