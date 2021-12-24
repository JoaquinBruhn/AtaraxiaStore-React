import React from "react";
import ItemCount from "../../itemCount/itemCount";



import "./item.css"

function Item ({product}){

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
                    <ItemCount stock={product[0].stock}/>
                    <p>Stock Disponible: <span>{product[0].stock}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Item