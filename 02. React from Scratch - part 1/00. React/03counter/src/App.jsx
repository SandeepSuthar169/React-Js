import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(1) // [variablle, function]  //HOOKS

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)    

    }
  }

  const removeValue = () => {
    if(counter > 0 ){
      setCounter(counter - 1)
    }
  }


  return (
    <>
     <h1>Hello Everyone</h1>
     <h4>COunter Value: {counter}</h4>

     <button 
     onClick={addValue}
     >Add value</button>
     
     <br />

     <button 
     onClick={removeValue}
     >Decrease value: {counter}</button>
    </>
  )
}

export default App