import { useCounterStore } from "../store/counterStore.js"

const Counter = () => {

    const { count, increase, descrease, multiply, reset } = useCounterStore()

  return (
    <div>
        <h2>Counter : {count}</h2>

        <button onClick={increase}>increase</button>
        <button onClick={descrease}>descrease</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter