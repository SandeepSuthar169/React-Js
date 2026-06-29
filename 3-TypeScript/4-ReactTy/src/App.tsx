import "./App.css"
import Cart from "./components/Cart"
import Counter from "./components/Counter"
import Lists from "./components/Lists"
import { type Coffee } from "./ListStore/List"

const menu: Coffee[] = [
  {id: 1, name: "fsdfa", price: 234},
  {id: 2, name: "fsdfa", price: 234},
  {id: 3, name: "fsdfa", price: 234},
]

const App = () => {
  return (
    <div>
      <Cart 
        name="books and dairy"
        prices={12}
      />
      <Counter />

      <Lists 
        items={menu}
      />

    </div>
  )
}

export default App