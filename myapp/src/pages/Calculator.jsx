import React, { useState } from "react";

function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter both weight and height");
      return;
    }

    const h = height / 100; // convert cm to meters
    const bmiValue = weight / (h * h);
    const roundedBMI = bmiValue.toFixed(2);
    setBmi(roundedBMI);

    // Determine BMI category
    let bmiCategory = "";
    if (bmiValue < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiCategory = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
    setCategory(bmiCategory);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>BMI Calculator</h1>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>
      )}
    </div>
  );
}

export default Calculator;
