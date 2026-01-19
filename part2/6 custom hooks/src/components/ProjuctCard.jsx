import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
// import product from "../data/product.js"

function ProjuctCard({product, onAddToCart}) {
  return (
    <div className='product-card'>
      <h3>{product.name}</h3>
      <p className='price'>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <FaCartShopping/> Add to Cart
      </button>
    </div>

  )
}

export default ProjuctCard