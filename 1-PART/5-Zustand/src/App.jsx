import React from 'react'
import Counter from './components/Counter'
import CounterButton from './components/CounterButton'
import CounterValue from './components/CounterValue'
import BMICalculate from './components/BMICalculate'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
const App = () => {
  return (
    <div>
      <Counter />
      <CounterButton />
      <BMICalculate />
      <Navbar />
      <Posts />

    </div>
  )
}

export default App