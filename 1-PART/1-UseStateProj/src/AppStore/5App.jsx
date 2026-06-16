import React, { useEffect, useState } from 'react'

const App = () => {
    const [birthday, setbirthday] = useState("")
    const [result, setresult] = useState(0) 
  
    const handleBirthyear = () => {

        const birthdayNew = parseFloat(birthday);
        const currentYear = new Date().getFullYear()
        const cal = (currentYear - birthdayNew).toFixed(0)

        setresult(cal)
    }


    return (
    <div>
        <h2>Age Calculate</h2>
        <div>
            <h2>{result}</h2>
        </div>
        <div>
            <input 
                type="number" 
                value={birthday}
                placeholder='Enter your birth year'
                onChange={(e) => setbirthday(e.target.value)}
            />

            <button
                onClick={handleBirthyear}
            >click</button>
        </div>

    </div>
  )
}

export default App