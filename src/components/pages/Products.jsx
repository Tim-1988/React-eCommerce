import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='category'>
      <Link className='pr-category' to='/Smartphones'><h1>Smartphones</h1></Link>
      <Link className='pr-category' to='/Laptops'><h1>Laptops</h1></Link>
      <Link className='pr-category' to='/Cameras'><h1>Cameras</h1></Link>
    </div>
  )
}

export default Products