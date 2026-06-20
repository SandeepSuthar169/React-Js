import React from 'react'
import Counter from './components/Counter'
import CounterButton from './components/CounterButton'
import CounterValue from './components/CounterValue'

const App = () => {
  return (
    <div>
      <Counter />
      <CounterButton />
      {/* <CounterValue /> */}
    </div>
  )
}

export default App