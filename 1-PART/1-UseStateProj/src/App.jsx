import React, { useState } from 'react'

const App = () => {

    const [input, setInput] = useState("")
    const [toggle, setToggle] = useState(false)

    const handleHideShowPassword = (e) => {
        setInput(e.target.value)
        
    } 

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div>
        <div>
            <input 
                type="text" 
                value={toggle ? input : ''}
                onChange={handleHideShowPassword}    
            />
            <button
                onClick={handleToggle}
            >{toggle ? "Show" : "Hide"}Password</button>



            <h1>{toggle ? input : " "}</h1>
        </div>
    </div>
  )
}
// Password Visibility Toggle**
// - Show/Hide password in an input field.
export default App