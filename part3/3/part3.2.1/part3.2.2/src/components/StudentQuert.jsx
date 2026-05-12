import React from 'react'

const StudentQuert = ({user, onUpate ,onRemove}) => {
  
  

  return (
    <div>
      <div>
        {user.length === 0 ? (
          <p>No Student name available</p>
        ) : (
          user.map((student) => (
            <div key={student.id}>
              <h3>{student.name}</h3>

              <button 
                onClick={() => {
                  const newName = prompt("Enter new student name")
                  if(newName) onUpate(student.id, newName)
                }}
              >Update</button>
              <button
                onClick={() => onRemove(student.id)}
              >
                remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default StudentQuert