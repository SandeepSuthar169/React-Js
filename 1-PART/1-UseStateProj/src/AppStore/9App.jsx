import React, { useState } from 'react'

const App = () => {

    const [toggleButton, setToggleButton] = useState(false)

  return (
    <div>
        <div>
        
            <button
                onClick={() => setToggleButton(!toggleButton)}
            >{toggleButton ? "SHow": "Hide"} Text</button>
        </div>
    </div>
  )
}

export default App