import React from 'react'
import { SmartphoneStock } from '../../products/SmartphoneStock'
import { SmartphonesUI } from './ProductsUI/SmartphonesUI'
import './ProductsUI/shop.css'

const Smartphones = () => {
  return (
    <div className='market'>
      <div className='title'>
        <h1>Smartphones</h1>
      </div>
      <div className='products'>
        {SmartphoneStock.map((smartphonesUI) => (<SmartphonesUI data={smartphonesUI} />))} 
      </div>
    </div>
  )
}

export default Smartphones