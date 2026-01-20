import React from 'react'
import { useCounterStore } from '../store/counterStrore.js'


function CounterValue() {

    const count = useCounterStore((state) => state.count)

    return (
    <div>
        <h2>Count: {count}</h2>
    </div>
  )
}

export default CounterValue