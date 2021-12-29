import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

import "./cartWidget.css"

function CartWidget(){

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
                  
               </div>
               <div className="cart-actions">
                  <h6>Precio</h6>
                  <h6>Limpiar Carrito</h6>
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