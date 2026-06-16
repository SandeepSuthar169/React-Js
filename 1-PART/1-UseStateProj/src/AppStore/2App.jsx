import React, { useState } from 'react'

const App = () => {

    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [cal, setCal] = useState(0)

    const handleCalculate = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);
    
        const bmi = (weightNum / (heightNum * heightNum)).toFixed(2);
        setCal(bmi);
      };

  return (  
    <div>
        <h2>BMI Calculator</h2>
        <h3>{cal}</h3>
        <div>
            <input 
                type="number"
                value={weight}
                placeholder='Weight'
                onChange={(e) => setWeight(e.target.value)}
            />
            <input 
                type="number"
                value={height}
                placeholder='height'
                onChange={(e) => setHeight(e.target.value)}
            />
        </div>
        <div>
            <button
                onClick={(handleCalculate)}>
                    Calculate
            </button>
        </div>
    </div>
  )
}
// 
export default App


