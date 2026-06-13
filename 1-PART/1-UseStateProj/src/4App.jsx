import React, { useState } from 'react'

const App = () => {

    const [celsius, setCelsius] = useState("")
    const [fahrenheit, setFahrenheit] = useState("")

    const [calcel, setCalcel] = useState(0) 
    const [calFahre, setCalFahre] = useState(0)

    const handleCelsius = () => {
        const celsiusNum = parseFloat(celsius);
        
        const cel = ((celsiusNum * 1.8) + 32).toFixed(3)
        setCalcel(cel)
    }

    const handleFahrenheit = () => {
        const fahrenheitNum = parseFloat(fahrenheit);

        const fahre = ((fahrenheitNum - 32) / 1.8).toFixed(3);

        setCalFahre(fahre)
    }

  return (
    <div>
        <h2>Temperature Converter</h2>
        <div>
            <h2>{calcel}</h2>
        </div>
        <div>
            <input 
                type="number" 
                value={celsius}
                placeholder='Write Celsius'
                onChange={(e) => setCelsius(e.target.value)}
            />

            <button
                onClick={handleCelsius}
            >C to F</button>
        </div>
        <div>
            <h2>{calFahre}</h2>
        </div>
        <div>
            <input 
                type="number" 
                value={fahrenheit}
                placeholder='Write Fahrenheit'
                onChange={(e) => setFahrenheit(e.target.value)}
            />

            <button
                onClick={handleFahrenheit}
            >F to C</button>
        </div>
    </div>
  )
}

export default App