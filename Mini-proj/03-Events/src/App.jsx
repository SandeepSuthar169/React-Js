// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(1)

//   const handleClick = () => {
//     setCount(count * 9 )
//   }
  
//   return (
//     <>
//       <div>
//         <button onClick={handleClick}>Click here!</button>
//         <p>Current Number is:{count}</p>
//       </div>
//     </>
//   )
// }

// export default App

// ===============================================

function App1(){
  const sayHello = (name) => {
    alert(`hello, ${name}`)
  }

  return (
    <>
      <div>
        <button onClick={() => sayHello("sandeep")}>suthar</button>
        <button onClick={() => sayHello("suthar")}>sandeep</button>
      </div>
    </>
  ) 
}

// export default App;

// ===============================================
// import { useState } from "react"

// function App(){
//   const [value, setValue] = useState("")

//   const handleChange = (e) => {
//     setValue(e.target.value)
//   }

//   return (
//     <>
//       <div>
//         <input 
//           type="text" 
//           value={value}  
//           onChange={handleChange}
//           placeholder="Type here......"
//         />
//         <p>{value}</p>
//       </div>
//     </>
//   )
// }

function App(){
  const [message, setMessage] = useState("Hover over the box")

  const handleMouseEnter = () => {
    setMessage('Mouse is inside!');
  }

  const handleMouseLeave = () => {
    setMessage("Mouse left the box");
  }

  return (
    <>
      <div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "lightcyan",
            textAlign: "center",
            lineHeight: "100px"
          }}
        >  
        Hover me
        </div>

        <div>
          <p>{message}</p>
        </div>
      </div>
    </>
  )
}

export default App;
