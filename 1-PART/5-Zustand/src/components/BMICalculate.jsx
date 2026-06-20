import React from "react";
import useBmiStore from "../store/countBMI";

const BMICalculate = () => {
  const {
    weight,
    height,
    bmi,
    setWeight,
    setHeight,
    calculateBMI,
  } = useBmiStore();

  return (
    <div>
      <h2>BMI Calculator</h2>
      <h3>{bmi}</h3>

      <div>
        <input
          type="number"
          value={weight}
          placeholder="Weight"
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          value={height}
          placeholder="Height"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div>
        <button
          onClick={() => calculateBMI(weight, height)}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default BMICalculate;