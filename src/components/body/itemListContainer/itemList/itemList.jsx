import React from "react";
import Items from "./items/items"

import "./intemList.css"

function ItemList ({list}){

    return(
        <div className="item-list">
            {list.map((el)=> <Items key={el.productId} product={el} />)}
        </div>
    )
};

export default ItemList
