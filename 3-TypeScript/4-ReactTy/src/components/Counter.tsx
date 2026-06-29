import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0)

  return (
    <div>
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => setCount((t) => t + 1)}
            >
                click
            </button>
        </div>
    </div>
  )
}

export default Counter 