# Ex06 BMI Calculator
## Date: 10-11-2025

## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM
App.jsx
```
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;

```

main.jsx

```

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

```

Calculator.jsx
```
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

```

Home.jsx
```
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


```



## OUTPUT

<img width="1919" height="1079" alt="Screenshot 2025-11-10 213614" src="https://github.com/user-attachments/assets/a20b3dff-30d9-4f8f-9518-126068756e16" />
<img width="1919" height="1079" alt="Screenshot 2025-11-10 213623" src="https://github.com/user-attachments/assets/b33eb75a-4e86-43e8-b9da-c068b7abb571" />
<img width="1919" height="1079" alt="Screenshot 2025-11-10 213639" src="https://github.com/user-attachments/assets/d3963325-f301-41cf-a084-0c5cd83fc772" />



## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
