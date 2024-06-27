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
      <h5>Question 6: Difference between && vs ||</h5>
      <Conditional />
      <LogicalAnd />
      <NullishCoalescing />
      <OptionalChainings />
    </div>
  );
}

const NullishCoalescing = () => {
  let userInput = null;
  let defaultValue = "Hello, default value!";

  return <p>{userInput ?? defaultValue}</p>;
};

const OptionalChaining = () => {
  let user = {
    name: "John",
    // address: {
    //   city: "New York",
    // },
  };

  // return user && user.address && <p>{user.address.city}</p>;
  return <p>{user?.address?.city}</p>;
};

const Conditional = () => {
  let x = 5;
  let y = 10;

  if (x > 0 && y > 0) {
    return <span>Both are greater than 0</span>;
  } else <></>;
};

const LogicalAnd = () => {
  let x = 5;
  let y = 10;

  if (x > 0 && y > 0) {
    return <p>Both are greater than 0</p>;
  } else return <></>;
};

const LogicalOr = () => {
  let isRaining = false;
  let isSunny = true;
  if (isRaining || isSunny) {
    return <p>It's either raining or sunny (or both)!</p>;
  } else <></>;
};

const NullishCoalescings = () => {
  let userInput = null;
  let defaultValue = "Hello, default value!";

  return <p>{userInput ?? defaultValue}</p>;
};

const OptionalChainings = () => {
  let user = {
    name: "John",
    // address: {
    //   city: "New York",
    // },
  };

  // return user && user.address && <p>{user.address.city}</p>;
  return <p>{user?.address?.city}</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
