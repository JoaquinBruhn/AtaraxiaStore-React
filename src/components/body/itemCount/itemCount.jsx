import React from "react";

import './itemCount.css'

function ItemCount({stock, amount, onAdd, onRemove}){

return(
    <div className="item-count">
        {amount <= 1 ? <button className="unactive-button" >-</button> : <button className="active-button" onClick={onRemove}>-</button>}
        <p>{amount}</p>
        {amount >= stock ? <button className="unactive-button" >+</button> : <button className="active-button" onClick={onAdd}>+</button>}
    </div>
)
}

export default ItemCount