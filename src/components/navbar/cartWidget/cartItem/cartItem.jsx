import React, {useState} from "react";
import { useContext } from "react";
import CartContext from "../../../../context/cartContext";

import "./cartItem.css"
import CartItemCounter from "./cartItemCounter/cartItemCounter";

function CartItem ({product}){

    const {addToCart, removeFromCart} = useContext(CartContext)

    const [cartAmount, setCartAmount] = useState(product.amountSelected)

    const onAdd = (()=>{
        setCartAmount(cartAmount+1)
        product.amountSelected=cartAmount
        addToCart(product)
    })
    const onRemove = (()=>{
        setCartAmount(cartAmount-1)
        product.amountSelected=cartAmount
        addToCart(product)
    })

    const removeItem = ()=>{
        removeFromCart(product)
    }

    return(
        <div className="cart-item">
            <p>{product.name}</p>
            <p>cantidad:{cartAmount}</p>
            <p>precio total: ${(product.price) * (cartAmount)}</p>
            <CartItemCounter cartAmount={cartAmount} cartStock={product.stock} onAdd={onAdd} onRemove={onRemove}/>
            <button onClick={removeItem}><p>Remover Producto</p></button>
        </div>
    )
}

export default CartItem