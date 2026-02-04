import { useState } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState("something")

  const handleMouseEnter = () => {
    setMessage("cursor is inside")
  }

  const handleMouseLeave = () => {
    setMessage("cursor is outside")
  }

  return (
   <>
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{height: "100px", width: "100px", backgroundColor: "orange"}}
      >
        mouse hover here
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
   </>
  )
}

export default App
