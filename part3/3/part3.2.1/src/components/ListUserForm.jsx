import React, { useState } from 'react'
import { FaUserPlus } from "react-icons/fa"

const ListUserForm = ({ addTo }) => {
    const [name, setName] = useState("")
  
    const handleInputSubmit = (e) => {  // Fixed typo
      e.preventDefault()
      if (!name.trim()) return  // Added trim to prevent whitespace-only names
  
      addTo({ name })
      setName("")
    }
  
    console.log(name);
    
    return (
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">
          <FaUserPlus /> ADD
        </button>
      </form>
    )
}

export default ListUserForm