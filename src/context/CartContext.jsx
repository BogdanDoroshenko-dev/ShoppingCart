import { useState,useContext, createContext } from "react";
import PropTypes from 'prop-types'
const CartContext=createContext();

export  function CartProvider({children}){
const [cart,setCart]=useState([]);

const addToCart=(product)=>{
    setCart(prev=>{
       
        const exists=prev.find(item=>item.id===product.id)

        if(exists){
            return prev.map(item=>
                item.id===product.id
                ?{...item,quantity:item.quantity+product.quantity}
                :
                item

                )
            }
           return[...prev,product]
        })

    }


const removeFromCart=(id)=>{
    setCart(prev=>prev.filter(item=>item.id!==id))
}


const updateQuantity=(id,quantity)=>{
if(quantity<1){
    removeFromCart(id);
    return;
}
    setCart(prev=>prev.map(item=>item.id===id?{...item,quantity}:item

        )
    )
}
return(
    <CartContext.Provider value={{cart,addToCart,removeFromCart,updateQuantity}}>
        {children}
    </CartContext.Provider>
)
    
}

    CartProvider.propTypes={
        children:PropTypes.node.isRequired
    }

export function useCart() {
    return useContext(CartContext)
}