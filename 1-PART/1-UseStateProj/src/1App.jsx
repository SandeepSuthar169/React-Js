import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
          <h1>{count}</h1>
      </div>
      <div>
        <button
          onClick={() => setCount((count) => count + 1)}
        >
          Increase 1 
        </button>

        <button
          onClick={() => setCount((count) => count * count )}
        >
          Square 
        </button>

        <button
          onClick={() => setCount((count) => count / (1/ 100) )}
        >
          Divide 
        </button>
      </div>
    </div>
  )
}

export default App