import React from "react";
import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [value, setvalue] = useState("");

  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  }

  function handleIncrement() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <button onClick={handleIncrement}>Increment by 3 {count}</button>

      <input value={value} onChange={(e) => setvalue(e.target.value)}></input>
      <p>Input Value {value}</p>

      <h5>
        BUild a Form containing First Name , LastName and email,use Only 1 State
        to mage all the fields
      </h5>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          name="firstname"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleInputChange}
        />
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default UseStateHook;
