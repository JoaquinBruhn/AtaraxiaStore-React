import React from "react";
import Item from "./item/item"

import "./intemList.css"

function ItemList ({list}){

    return(
        <div className="item-list">
            {list.map((el)=> <Item key={el.productId} product={el} />)}
        </div>
    )
};

export default ItemList
