// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
