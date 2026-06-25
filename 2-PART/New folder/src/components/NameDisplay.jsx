import React from 'react'

const NameDisplay = ({ list, onRemove }) => {
  return (
    <div>
        {list.length === 0 ? (
            <p>No Name Here</p>
        ) : (
            <div>
                {list.map((name) => (
                    <div key={name.id}>
                        <h3>{name?.name}</h3>
                        <button onClick={() => onRemove(name.id)}>remove</button>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default NameDisplay