import React from 'react'
import { CamerasStock } from '../../products/CamerasStock'
import { CamerasUI } from './ProductsUI/CamerasUI'
import './ProductsUI/shop.css'

const Cameras = () => {
  return (
    <div className='market'>
      <div className='title'>
        <h1>Cameras</h1>
      </div>
      <div className='products'>
        {CamerasStock.map((camerasUI) => (<CamerasUI data={camerasUI} />))} 
      </div>
    </div>
  )
}

export default Cameras