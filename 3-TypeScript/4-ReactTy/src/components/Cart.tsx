
interface CartProp {
    name: string
    prices: number
    isStatus?: boolean
}

const Cart = ({ name, prices, isStatus = true }: CartProp)  => {
  return (
    <article>
        <div>
            <h2>{name}  {prices} {isStatus && <span>⭐</span>}</h2>
        </div>
    </article>
  )
}

export default Cart