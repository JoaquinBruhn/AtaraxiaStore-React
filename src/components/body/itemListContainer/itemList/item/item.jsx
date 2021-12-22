import React from "react";
import ItemCount from "./itemCount/itemCount";



import "./item.css"

function Item ({product}){

    return(
        <div className="product-item">
            <h4>{product.name}</h4>
            <div className="product-details">
                <h5>Product info:</h5>
                <div>
                    <p>Size: {product.size}</p>
                    <p>Color: {product.color}</p>
                    <p>Stock avaliable: {product.stock}</p>
                </div>
                <ItemCount stock={product.stock}/>
            </div>
        </div>
    )
}

export default Item