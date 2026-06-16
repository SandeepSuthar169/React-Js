import React, { useState } from 'react'

const App = () => {
    const [text, setText] = useState("")

  return (
    <div>
        <div>
            <input 
                type="text" 
                value={text}
                placeholder='enter your name'
                onChange={(e) => setText(e.target.value)}
            />
            <h2>{text.length}</h2>
        </div>
    </div>
  )
}
// Character Counter
// - Text input that shows the number of characters typed.
export default App