import React, { useState } from 'react'

const App = () => {

    const [totalBill, setTotalBill] = useState('')
    const [tipPrecentage, setTipPrecentage] = useState('')
    const [tip, setTip] = useState(0)

    const handleTipCalculate = () => {
        const totalBillNum = parseFloat(totalBill)
        const tipPrecentageNum = parseFloat(tipPrecentage)

        const tip = (totalBillNum * ( tipPrecentageNum / 100 )).toFixed(2)
        setTip(tip)
    }

  return (
    <div>
        <h2>Tip Calculator</h2>
        <div>
            <h3>{tip}</h3>
        </div>
        <div>
            <input 
                type="number" 
                value={totalBill}
                placeholder='Total Bill '
                onChange={(e) => setTotalBill(e.target.value)}
            />

            <input 
                type="number" 
                value={tipPrecentage}
                placeholder='Tip Precentage'
                onChange={(e) => setTipPrecentage(e.target.value)}
            />
        </div>

        <div>
            <button
                onClick={handleTipCalculate}
            >Calculate</button>
        </div>
    </div>
  )
}

export default App