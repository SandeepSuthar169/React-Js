import "./App.css"
import { useEffec, useState } from "react"


export default function App(){
  const [count, setCount] = useState(0)
  const [toSet, setTOSet] = useState(0)


  //// const incremetHander = (prev) => {
  //   //// setCount(numValue + 1)
  //  // setCount((prev) => prev + 1)
  // }
  return (
    <>
      <h1>Counter is {count}</h1>
      <div className="card">Count is {count}</div>

      <div>
        <button onClick={() => setCount((count) => count + 1) } style={{margin: "0 5px"}} >
          Increase
        </button>
        
        <button onClick={() => setCount((count) => (Math.max(count - 1, 0)))} style={{margin: "0 5px"}} >
          Decrease
        </button>

        <button onClick={() => setCount((count) => 0)} style={{margin: "0 5px"}} >
          Reset
        </button>

        <div style={{margin:"10px 0"}}>
          <input 
            style={{
              width: "100ox",
              border: "1px solid white",
              margin: "0 5px",
              padding: "0.6em 1.2em"
            }} value={toSet} onChange={(e) => setTOSet(Number(e.target.value))} type="text"  name=""  id="" 
          />
          <button style={{margin: "0 5px"}} onClick={() => {
            setCount(Number(toSet))
            setTOSet(0)
          }}>
            set to {toSet}
          </button>
        </div>
      </div>
    </>
  )
}