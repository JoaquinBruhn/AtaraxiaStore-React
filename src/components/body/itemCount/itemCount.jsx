import React, {useState} from "react";

import './itemCount.css'

function ItemCount({stock}){
    const [amount, setAmount] = useState(1)

    const onAdd = (()=>{
        setAmount(amount+1)
    })

    const onRemove = (()=>{
        setAmount(amount-1)
    })
return(
    <div className="item-count">
        {amount <= 1 ? <button className="unactive-button" >-</button> : <button className="active-button" onClick={onRemove}>-</button>}
        <p>{amount}</p>
        {amount >= stock ? <button className="unactive-button" >+</button> : <button className="active-button" onClick={onAdd}>+</button>}
    </div>
)
}

export default ItemCount