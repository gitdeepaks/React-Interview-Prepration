import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaDer() {
  return (
    <div className="header">
      <NavLink
        // className={({ isActive, isPending, isTransitioning }) => {
        //   [isPending ? "pending" : ""];
        // }}

        to="/auth"
      >
        Home
      </NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </div>
  );
}
