import React, { useContext } from 'react'
import { SmartphoneStock } from '../../products/SmartphoneStock'
import { LaptopStock } from "../../products/LaptopsStock" 
import { CamerasStock } from "../../products/CamerasStock" 
import { ShopContext } from "../../context/shop-context"
import { CartItem } from './cart-item'
import "./cart.css"
import { useNavigate } from "react-router-dom";


const Cart = () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
      {SmartphoneStock.map((smartphonesUI) => {
        if (cartItems[smartphonesUI.id] !== 0) {
          return <CartItem data={smartphonesUI} />
        }
      })}
      </div>
      <div className='cartItems'>
      {LaptopStock.map((laptopsUI) => {
        if (cartItems[laptopsUI.id] !== 0) {
          return <CartItem data={laptopsUI} />
        }
      })}
      </div>
      <div className='cartItems'>
      {CamerasStock.map((camerasUI) => {
        if (cartItems[camerasUI.id] !== 0) {
          return <CartItem data={camerasUI} />
        }
      })}
      </div>

    {totalAmount > 0 ? (
      <div className='checkout'>
        <p> Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/products")}> Continue Shopping </button>
        <button> Checkout </button>
      </div>
    ) : (
      <h1>Empty Cart! Start shopping NOW!</h1>
    )}
    </div>
  )
}

export default Cart