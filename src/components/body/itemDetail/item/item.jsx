import React, {useState} from "react";
import { useContext } from "react";
import ItemCount from "../../itemCount/itemCount";
import Cart from "../../cart/cart";
import CartContext from "../../../../context/cartContext";

import "./item.css"


function Item ({product}){

    const {addToCart}=useContext(CartContext)

    const [amount, setAmount] = useState(1)
    const [readyToBuy, setReadyToBuy] = useState(false)

    const onAdd = (()=>{
        setAmount(amount+1)
    })
    const onRemove = (()=>{
        setAmount(amount-1)
    })

    const cartSwap = (()=>{
        setReadyToBuy(!readyToBuy)
    })

    function addItem(){
        product.amountSelected=amount
        addToCart(product)
    }

    return(
        <div className="product">
            <h4>{product.name}</h4>
            <div className="product-details">
                <h5>Product info:</h5>
                <div>
                    <p>Talle: <span>{product.size}</span></p>
                    <p>Color: <span>{product.color}</span></p>
                    <p>Precio: <span>${product.price}</span></p>
                    <p>Descripcion:</p>
                    <p><span>{product.description}</span></p>
                </div>
                <div className="stock">
                    {readyToBuy?
                    <Cart amount={amount}/>
                    :
                    <ItemCount stock={product.stock} amount={amount} onAdd={onAdd} onRemove={onRemove}/>
                    }
                    <p>Stock Disponible: <span>{product.stock}</span></p>
                    {readyToBuy?
                        <>
                        <button onClick={cartSwap}>Cambiar Cantidad</button>
                        <button onClick={addItem}>Agregar al carrito</button>
                        </>
                        :
                        <button onClick={cartSwap}>Listo Para Comprar</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Item