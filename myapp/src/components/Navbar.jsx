import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
      <Link to="/calculator" style={{ margin: "0 10px" }}>BMI Calculator</Link>
    </nav>
  );
}

export default Navbar;
