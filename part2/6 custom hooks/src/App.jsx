 import { useState } from 'react'
import { useCart } from './Hooks/useCart.js'
import './App.css'
import { products } from './data/product.js'
import ProjuctCard from './components/ProjuctCard.jsx'
import Cart from './components/Cart.jsx'
function App() {

  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart()

  return (
    <>
      <div className='app'>
        <header>
          <h1>Shopping Cart</h1>
        </header>
        <main className='products'>
          <section>
              {products.map(product => (
                <ProjuctCard 
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
          </section>
          <Cart 
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            total={total}
          />
        </main>
      </div>
    </>
  )
}

export default App
