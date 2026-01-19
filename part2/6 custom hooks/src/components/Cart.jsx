import CartItem from "./CartItem.jsx"

function Cart({cart, onUpdateQuantity, onRemove, total}) {
  if(cart.length === 0){
    return <div>Your cart is empty</div>
  }
  
  return (
    <div className="card">
      <h2>Shopping cart</h2>
      {cart.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
      <div>Total: ${typeof total === 'number' ? total.toFixed(2) : total}</div>
      <button>Checkout</button>
    </div>
  )
}

export default Cart