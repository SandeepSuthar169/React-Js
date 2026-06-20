import React from 'react'
import Counter from './components/Counter'
import CounterButton from './components/CounterButton'
import CounterValue from './components/CounterValue'
import BMICalculate from './components/BMICalculate'

const App = () => {
  return (
    <div>
      <Counter />
      <CounterButton />
      <BMICalculate />
    </div>
  )
}

export default App