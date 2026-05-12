import React, { useState } from 'react'

const StudentForm = ({onAdd}) => {
  
  const [name, setName] = useState("");
  
  const handleForm = (e) => {
    e.preventDefault();

    if(!name.trim()) return 
    onAdd({name})
    setName("")
  } 

  return (
    <div>
      <div>
        <form onSubmit={handleForm}>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  )
}

export default StudentForm