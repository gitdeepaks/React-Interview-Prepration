const products = [
  { id: 1, name: "Product A", price: 20, category: "Electronics" },
  { id: 2, name: "Product B", price: 30, category: "Clothing" },
  { id: 3, name: "Product C", price: 15, category: "Electronics" },
  { id: 4, name: "Product D", price: 25, category: "Clothing" },
  { id: 5, name: "Product E", price: 50, category: "Electronics" },
  { id: 6, name: "Product F", price: 40, category: "Electronics" },
];

const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];

function App() {
  return (
    <div>
      <h2>Rendering Lists and Conditional Operators</h2>
      {products.map((product) => {
        return (
          <li>
            <strong>
              {product.name} - {product.category} - ${product.price}
            </strong>
          </li>
        );
      })}

      <h2>Filter</h2>
      <ul>
        {products
          .filter((product) => product.category === "Electronics")
          .map((product) => (
            <ul>
              <li>
                {product.name} - {product.category} - ${product.price}
              </li>
            </ul>
          ))}
      </ul>

      <h3>
        {" "}
        Question 3: How can you Render a summary of total prices for products? -
        means Reduce
      </h3>
      <div>
        <p>
          total Price : $
          {products.reduce((acc, product) => {
            return acc + product.price;
          }, 0)}
        </p>
      </div>

      <div>
        <h3>
          Add discountedPrice key with 10% discount to all the products with
          price more than $20 and render it.
        </h3>

        <ul>
          {products
            .filter((product) => {
              return product.price > 20;
            })
            .map((product) => {
              return {
                ...product,
                discountedPrice: product.price - product.price * (10 / 100),
              };
            })
            .map((product) => (
              <ul>
                <li>
                  {product.name} - $ {product.price} - $
                  {product.discountedPrice}
                </li>
              </ul>
            ))}
        </ul>
      </div>
      <div>
        <h3>
          Question 5: How can you filter and render unique elements from an
          array using filter in React?
        </h3>
        <ul>
          <li>
            {names
              .filter((name, index) => {
                return names.indexOf(name) === index;
              })
              .map((name) => {
                return <li>{name}</li>;
              })}
          </li>
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
