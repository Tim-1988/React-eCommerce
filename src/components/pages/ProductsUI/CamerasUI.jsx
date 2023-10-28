import React, { useContext } from 'react'
import { ShopContext } from "../../../context/shop-context"


export const CamerasUI = (props) => {
    const { id, productName, price, productImage } = props.data
    const { addToCart, cartItems } = useContext(ShopContext);
    
    const cartItemAmount = cartItems[id];
    return (
        <div className='product'>
            <img src={productImage} alt='' />
            <div className='Description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            </div>
            <button className='addToCartBtn' onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 && <p> ({cartItemAmount}) </p>}
            </button>
        </div>
    );   
};
