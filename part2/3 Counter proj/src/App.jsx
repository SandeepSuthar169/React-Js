import "./App.css"

export default function App(){
  return (
    <>
      <h1>Counter</h1>
      <div className="card">Count is 54</div>

      <div>
        <button
        onClick={() => {}}
        style={{margin: "0 5px"}}  
        >
          Increase
        </button>
        
        <button
        onClick={() => {}}
        style={{margin: "0 5px"}} >
          Decrease
        </button>

        <button
        onClick={() => {}}
        style={{margin: "0 5px"}} >
          Reset
        </button>
        <div style={{margin:"10px 0"}}>
          <input 
            style={{
              width: "100ox",
              border: "1px solid white",
              margin: "0 5px",
              padding: "0.6em 1.2em"
            }}
            value="8"
            onChange={() => {}}
            type="text" 
            name="" 
            id="" 
          />
          <button
            style={{margin: "0 5px"}}
            onClick={() => {}}
          >set to 8</button>
        </div>
      </div>
    </>
  )
}