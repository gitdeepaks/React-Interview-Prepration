import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
    if (e.target.email.value && e.target.password.value) {
      navigate(`/posts`);
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
