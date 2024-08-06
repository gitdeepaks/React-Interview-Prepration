import React from "react";

function Header() {
  return (
    <nav className="h-5 flex items-center justify-between">
      <h2 className="text-2xl font-mono">Deepak Store</h2>
      <input className="p-2" type="text" placeholder="Search a product" />
    </nav>
  );
}

export default Header;
