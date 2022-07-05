import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
      <Link to="/"> Home</Link>
      <Link to="register">Register</Link>
      </ul>
    </nav>
  );
}

export default Navbar;