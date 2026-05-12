import React, {useState} from 'react'
import Button from './components/Button'



const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <Button 
        text="BUTTON GREEN"
        color="green"
        size="small"
        onClick={() => setCount(count => count + 1)}
      />
      <Button 
        text="BUTTON RED"
        color="red"
        size="large"
        onClick={() => setCount(count => count + 1)}
      />
      <Button 
        text="BUTTON CLICK"
        color="green"
        size="large"
        onClick={() => setCount(count => count + 1)}
      />
    </div>
  )
}

export default App