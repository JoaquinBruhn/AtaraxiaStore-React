import React from "react";
import { NavLink } from "react-router-dom";



import "./items.css"

function Items ({product}){
    return(
        <div className="product-item">
            <h4>{product.name}</h4>
            <div className="product-info">
                <button><NavLink to={`/item/${product.productId}`}>Ver Producto</NavLink></button>
                <h5>Stock: {product.stock}</h5>
            </div>
        </div>
    )
}

export default Items