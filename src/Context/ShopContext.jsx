import React, {createContext, useState} from "react";
import all_product from "../assets/all_product";
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for(let index=0;index < all_product.length;index++){
       cart[index] = 0
    } 
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart())
    
    const addTocart = (itemId) =>{
        if (itemId >= 0 && itemId < all_product.length) {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }
  
    const removeFromCart = (itemId) =>{
        if (itemId >= 0 && itemId < all_product.length) {
            setCartItems((prev)=>{
                const currentCount = prev[itemId];
                if (currentCount > 0) {
                    return {...prev,[itemId]:currentCount-1};
                }
                return prev;
            });
        }
    }
  
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo  = all_product.find((product)=>product.id === Number(item))
                if (itemInfo) {
                    totalAmount += itemInfo.new_price* cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItmes = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                totalItmes += cartItems[item];
            }
        }
        return totalItmes;
    }
    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addTocart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
