import React, { useCallback } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const initusers = [
  {
    id: 1,
    name: "Foo",
  },
  {
    id: 2,
    name: "Bar",
  },
];

const ListUsers = React.memo(({ users, OnRemove }) => {
  console.log("list render");

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}

          <span onClick={() => OnRemove(user.id)}>X</span>
        </li>
      ))}
    </ul>
  );
});

function App() {
  console.log("render");

  const [users, setUsers] = useState(initusers);
  const [text, setText] = useState("");
  const handleRemove = useCallback(
    (userId) => {
      const updateUsers = users.filter((user) => user.id !== userId);
      setUsers(updateUsers);
    },
    [users]
  );
  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ListUsers users={users} OnRemove={handleRemove} />
    </div>
  );
}

export default App;
