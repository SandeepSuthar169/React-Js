// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)


  
//   return (
//     <>  
//      <div>
//         {isLoggedIn ? <p>helo user</p> : <p>plese log in to continue.</p>}
//      </div>
//      <div>
//         <button
//           onClick={() => setIsLoggedIn(!isLoggedIn)}
//         >{isLoggedIn ? "log out" : "log in"}</button>
//      </div>
//     </> 
//   )
// }

// export default App


import React from 'react'

function App() {
 
 const fruit = ["Apple", "dsdfa" ," asdfa", "dskjfdfa"]
 
  return (
    <>
      <div>
        <ul>
          {fruit.map((fruit, i) => (
            <li key={i}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App