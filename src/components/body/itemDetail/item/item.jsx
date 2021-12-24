import React, {useState} from "react";
import ItemCount from "../../itemCount/itemCount";
import Cart from "../../cart/cart";



import "./item.css"

function Item ({product}){

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

    return(
        <div className="product">
            <h4>{product[0].name}</h4>
            <div className="product-details">
                <h5>Product info:</h5>
                <div>
                    <p>Talle: <span>{product[0].size}</span></p>
                    <p>Color: <span>{product[0].color}</span></p>
                    <p>Descripcion:</p>
                    <p><span>{product[0].description}</span></p>
                </div>
                <div className="stock">
                    {readyToBuy?
                    <Cart amount={amount}/>
                    :
                    <ItemCount stock={product[0].stock} amount={amount} onAdd={onAdd} onRemove={onRemove}/>
                    }
                    <p>Stock Disponible: <span>{product[0].stock}</span></p>
                    <button onClick={cartSwap}>
                        {readyToBuy?
                        "Elegir Cantidad"
                        :
                        "Listo Para Comprar"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item