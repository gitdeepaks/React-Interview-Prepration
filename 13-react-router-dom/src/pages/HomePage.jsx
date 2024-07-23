import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function HomePage() {
  return (
    <div className="header">
      <NavLink to={"/auth/login"}>LogIn</NavLink>
      <NavLink to={"/auth/signup"}>SignUp</NavLink>
      <Outlet />
    </div>
  );
}

export default HomePage;
