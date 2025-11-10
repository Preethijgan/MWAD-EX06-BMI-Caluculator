import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to BMI Calculator</h1>
      <Link to="/calculator">
        <button>Go to Calculator</button>
      </Link>
    </div>
  );
}

export default Home;
