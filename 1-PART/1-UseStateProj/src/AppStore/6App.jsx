import React, { useState } from 'react'

const App = () => {

    const [visible, setVisible] = useState(false)

    const handleVisible = () => {
        setVisible(!visible)
    }

  return (
    <div>
        <button
            onClick={handleVisible}
        >
            {visible ? "hide" : "show"} password
        </button>
        {visible && <p>sandeep suthar</p>}

    </div>
  )
}

// Show/Hide Text
// - Button toggles visibility of a paragraph.

export default App