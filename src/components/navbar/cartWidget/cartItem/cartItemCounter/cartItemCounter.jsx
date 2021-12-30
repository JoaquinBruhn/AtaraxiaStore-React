import React from "react";

function CartItemCounter({cartAmount, cartStock, onAdd, onRemove}){


    return(
        <div className="item-count">
        {cartAmount <= 1 ? <button className="unactive-button" >-</button> : <button className="active-button" onClick={onRemove}>-</button>}
        <p>{cartAmount}</p>
        {cartAmount >= cartStock ? <button className="unactive-button" >+</button> : <button className="active-button" onClick={onAdd}>+</button>}
    </div>
    )
}

export default CartItemCounter