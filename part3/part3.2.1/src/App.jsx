import ListUserForm from './components/ListUserForm'
import ListUserDisplay from './components/ListUserDisplay'
import { useState } from 'react'

const App = () => {

  const [cName, setCName] = useState([])

  const addToList = (user) => {
    setCName([...cName, { ...user, id: Date.now() }])
  }

  const updateToList = (id, newName) => {
    setCName(cName.map((user) =>
      user.id === id ? { ...user, name: newName } : user
    ))
  }

  const deleteToList = (id) => {
    setCName(cName.filter((user) => user.id !== id))
  }

  return (
    <div>
      <ListUserForm addTo={addToList} />
      <ListUserDisplay
        user={cName}
        onUpdateUser={updateToList}
        onRemoveUser={deleteToList}
      />
    </div>
  )
}

export default App