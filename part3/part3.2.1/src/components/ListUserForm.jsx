import React from 'react'


const ListUserForm = ({ addTo }) => {

    const [name, setName] = useState("")
  
    const handleIinputSumit = (e) => {
      e.preventDefault()
      if (!name) return
  
      addTo({ name })
      setName("")
    }
  
    const handleName = (e) => {
      setName(e.target.value)
    }
  
    return (
      <form onSubmit={handleIinputSumit}>
        <input
          type="text"
          value={name}
          onChange={handleName}
        />
        <button type="submit">ADD</button>
      </form>
    )
  }