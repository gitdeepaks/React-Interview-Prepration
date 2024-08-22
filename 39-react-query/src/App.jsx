import React from "react";
import "./App.css";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const getUser = () =>
  axios
    .get("https://api.github.com/users/deepaksankhyan")
    .then((res) => res.data);

function App() {
  const { data: users = [] } = useQuery({
    queryKey: ["login"],
    queryFn: getUser,
  });
  console.log(users);

  return <div className="">{users.login}</div>;
}

export default App;
