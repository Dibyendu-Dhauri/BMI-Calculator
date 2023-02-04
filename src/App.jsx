import { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);

const output = useMemo(()=> {
  const heightInMeter = height/100 * height/100;
  return (weight/heightInMeter).toFixed(1)
},[weight,height])

  
  

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p class="slider-output">Weight :{weight} kg</p>
        <input
          className="input-slider"
          type="range"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="40"
          max="220"
        />

        <p class="slider-output">Height :{height}cm</p>
        <input
          className="input-slider"
          type="range"
          value={height}
          min="140"
          max="220"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is:</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
