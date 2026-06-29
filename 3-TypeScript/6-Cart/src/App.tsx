import { useState } from "react"
import Cart from "./components/Cart"

const App = () => {

  const [click, seClick] = useState<number>(0)

  return (
    <div>
      <div>
        <h2>{click}</h2>
      </div>
      <Cart 
        title="hi my name is sandeep suthar"
        footer={
          <div>
            <button
              value={click}
              onClick={() => seClick((w) => w + 1)}
            > 
              CLICK
            </button> 
          </div>
        }
      />
    </div>
  )
}

export default App