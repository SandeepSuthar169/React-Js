import React, { useState } from 'react'

const NameForm = ({ onAdd }) => {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        onAdd({name})
        setName("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type='submit'>
                Add Name
            </button>
        </div>
    </form>
  )
}

export default NameForm