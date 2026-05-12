import React, { useState } from 'react'
import StudentForm from './components/StudentForm'
import StudentQuert from './components/StudentQuert'





const App = () => {

  const [student, setStudent] = useState([])

  const addStudent = (user) => {
    setStudent([...student, {...user, id: Date.now()}])
  }


  const updateStudent = (id, newStudent) => {
    setStudent((student.map((user) => (
      user.id === id ? {...user, id: newStudent} : user
    ))))
  }
  const deleteStudent = (id) => {
    setStudent((student.filter((user) =>  user.id !== id)))
  }

  return (
    <div>
      <div>
        <StudentForm  onAdd={addStudent}/>
        <StudentQuert 
          user={student}
          onUpate={updateStudent} 
          onRemove={deleteStudent}
        />
      </div>
    </div>
  )
}

export default App

// 3. Student List
// Inputs: name + age
// Add student
// ✏️ Edit student
// ❌ Delete student