import useCounter from "../hooks/useCounter";

function Counter() {
  const counter = useCounter(0, 2);

  return (
    <div>
      <h2>count:{counter.count}</h2>
      <button onClick={counter.increment}>Increment</button>
      <button onClick={counter.decrement}>Decrement</button>
      <button onClick={counter.reset}>Reset</button>
    </div>
  );
}

export default Counter;
