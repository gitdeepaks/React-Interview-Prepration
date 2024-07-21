import { useState } from "react";

const useCounter = (initCount = 0, step = 1) => {
  const [count, setCount] = useState(initCount);

  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    setCount(count - step);
  };
  const reset = () => {
    setCount(initCount);
  };

  return {
    increment,
    decrement,
    reset,
    count,
  };
};
export default useCounter;
