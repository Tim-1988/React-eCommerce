import React, {createContext, useState} from 'react'
import {SmartphoneStock} from "../products/SmartphoneStock" 
import {LaptopStock} from "../products/LaptopsStock" 
import {CamerasStock} from "../products/CamerasStock" 
import Smartphones from '../components/pages/Smartphones';
import { SmartphonesUI } from '../components/pages/ProductsUI/SmartphonesUI';
import { LaptopsUI } from '../components/pages/ProductsUI/LaptopsUI';
import { CamerasUI } from '../components/pages/ProductsUI/CamerasUI';

export const ShopContext = createContext("");

const getDefaultCart = () => {
    
    let cart = {};
    for (let i = 1; i < SmartphoneStock.length + LaptopStock.length + CamerasStock.length +1; i++) {
        cart[i] = 0;
    }

    return cart;
    
};

export const ShopContextProvider = (props) => {
        const[cartItems, setCartItems] = useState(getDefaultCart());

        console.log(cartItems);

        const getTotalCartAmount = () => {
            let totalAmount = 0;
            for (const item in cartItems) {
                if (item <= 4) {
                    if(cartItems[item] > 0) {
                        let itemInfo = SmartphoneStock.find((SmartphonesUI) => SmartphonesUI.id === Number(item));
                        totalAmount += cartItems[item] * itemInfo.price; 
                    }
                }
                else if (item <= 6) {
                    if(cartItems[item] > 0) {
                        let itemInfo = LaptopStock.find((LaptopsUI) => LaptopsUI.id === Number(item));
                        totalAmount += cartItems[item] * itemInfo.price; 
                    }
                }
                else {
                    if(cartItems[item] > 0) {
                        let itemInfo = CamerasStock.find((CamerasUI) => CamerasUI.id === Number(item));
                        totalAmount += cartItems[item] * itemInfo.price; 
                    }
                }
            }

            return totalAmount;
        }
        
        const addToCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        };
        const removeFromCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
        };
        
        const contextValue = {cartItems, addToCart, removeFromCart, getTotalCartAmount};
        
        console.log(cartItems);
        
        return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

