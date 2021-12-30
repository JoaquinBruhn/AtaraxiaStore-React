import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../../context/cartContext";
import CartItem from "./cartItem/cartItem";

import "./cartWidget.css"

function CartWidget(){

   const {cartList, clearCart} = useContext(CartContext)

   const [showList, setShowList ] = useState(false)

   const toggleShowList = ()=>{setShowList(!showList)}

   return(
      <>
         <Button onClick={toggleShowList}>
            <i className="fas fa-shopping-cart"></i>
         </Button>
         { showList?
            <div className="cart-list">
               <div className="cart-products">
                  {cartList.map((el)=> <CartItem key={el.productId} product={el} />)}
               </div>
               <div className="cart-actions">
                  <h6>Precio:</h6>
                  <button onClick={clearCart}><h6>Limpiar Carrito</h6></button>
                  <h6>Comprar</h6>
               </div>
            </div>
            :
            null
         }
      </>
   )
}

export default CartWidget