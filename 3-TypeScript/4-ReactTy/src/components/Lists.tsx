// import type { Coffee }from '../ListStore/List'
import Cart from '../components/Cart'
import { type Coffee } from '../ListStore/List'


interface CoffeeListProps {
  items: Coffee[]
}



const Lists = ({items} : CoffeeListProps) => {
  return (
    <div>
      <div>
        <div>
          {items.map((g) => (
            <Cart 
              key={g.id}
              name={g.name}
              prices={g.price}
              isStatus={g.price > 30}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lists