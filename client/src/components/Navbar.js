import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/"> home</Link>
      <Link to="productpage">products</Link>
    </div>
  );
}

export default Navbar;