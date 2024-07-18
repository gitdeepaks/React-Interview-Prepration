import React, { useState } from "react";

function UseStateHook() {
  const [count, setCount] = React.useState(0);

  const [val, setVal] = useState("");

  function handleIncrement() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      Count:{count}
      <h5>
        <button onClick={handleIncrement}>Increment by 3</button>
      </h5>
      <h5>2 Way Data binding</h5>
      <h3>
        It is an concept that allow the sync of data between the model (or
        State) and can view in both directions . You can achieve this by using
        the useState hook.
      </h3>
      <input value={val} onChange={(e) => setVal(e.target.val)} />
      <p>Input val:{val}</p> */}

      <form action="">
        <input placeholder="FirstNam" type="text" name="" />
        <input placeholder="LastNam" type="text" name="" />
        <input placeholder="Email" type="email" name="" />
      </form>
    </div>
  );
}

export default UseStateHook;
