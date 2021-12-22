import React from "react";
import { NavLink } from "react-router-dom";



import "./item.css"

function Items ({product}){

    return(
        <div className="product-item">
            <h4>{product.name}</h4>
            <div className="product-details">
                <button><NavLink to={`./item/${product.productID}`} ></NavLink></button>
                <h5>Stock: {product.stock}</h5>
            </div>
        </div>
    )
}

export default Items