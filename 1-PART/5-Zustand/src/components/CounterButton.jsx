import { useCounterStore } from "../store/counterStore.js"

const CounterButton = () => {
    const count = useCounterStore((state) => state.count)
    const increase = useCounterStore((state) => state.increase)
    const descrease = useCounterStore((state) => state.descrease)

  return (
    <div>
        <h2>CounterButton : {count}</h2>
        <button onClick={descrease}>-</button>
        <button onClick={increase}>+</button>
    </div>
  )
}

export default CounterButton