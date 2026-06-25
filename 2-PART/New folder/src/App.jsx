import React, { useState } from 'react'
import NameDisplay from './components/NameDisplay'
import NameForm from './components/NameForm'

const App = () => {

  const [list, setList] = useState([])
  
  const addTolist = (name) => {
    setList([...list, {...name, id: Date.now()}])
  }

  const removeFromList = (id) => {
    setList(list.filter((name) => name.id !== id))
  }
  return (
    <div>
      <main>
        <NameForm  onAdd={addTolist}/>
        <NameDisplay 
          list={list}
          onRemove={removeFromList}  
        />
      </main>
    </div>
  )
}

export default App