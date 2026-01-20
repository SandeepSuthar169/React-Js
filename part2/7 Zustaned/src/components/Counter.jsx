import { useCounterStore } from '../store/counterStrore.js'

function Counter() {

  const {count, increase, descrese, reset} = useCounterStore()

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={descrese}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter