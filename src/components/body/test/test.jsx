import React, {useContext} from "react";
import CartContext from "../../../context/cartContext";

import "../../../App"
import "./test.css"


function Test(){

    const { contextTest, handleContextTest } = useContext(CartContext)
    
return (
    <div>
        <h3>TEST</h3>
        <p>{contextTest}</p>
        <form onSubmit={handleContextTest}>
            <input type="text" id="contextTest"/>
            <button type="submit" >Submit</button>
        </form>
    </div>
)}

export default Test