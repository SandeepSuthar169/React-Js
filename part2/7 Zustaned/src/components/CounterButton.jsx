import { useCounterStore } from '../store/counterStrore.js'


function CounterButton() {
    const increase = useCounterStore((state) => state.increase)
    const decrease = useCounterStore((state) => state.decrease)

    return (
        <div>
            <div>
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
            </div>
        </div>
    )
}

export default CounterButton