import React from 'react'
import { LaptopStock } from '../../products/LaptopsStock'
import { LaptopsUI } from './ProductsUI/LaptopsUI'
import './ProductsUI/shop.css'

const Laptops = () => {
  return (
    <div className='market'>
      <div className='title'>
        <h1>Laptops</h1>
      </div>
      <div className='products'>
        {LaptopStock.map((laptopsUI) => (<LaptopsUI data={laptopsUI} />))} 
      </div>
    </div>
  )
}

export default Laptops