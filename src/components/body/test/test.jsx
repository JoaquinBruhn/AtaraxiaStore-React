import React, {useContext} from "react";
import { NewContext } from "../../../App";
import CartContext from "../../../context/cartContext";

import "../../../App"
import "./test.css"


function Test(){

    const context = useContext(NewContext)

    const { cart, setCart} = useContext(CartContext)

    const handleCart = (e)=>{
        e.preventDefault()
        setCart(e.target.contextTest.value)
    }
    
return (
    <div>
        <h3>TEST</h3>
        <p>{context}</p>
        <p>{cart}</p>
        <form onSubmit={handleCart}>
            <input type="text" id="contextTest"/>
            <button type="submit" >Submit</button>
        </form>
    </div>
)}

export default Test