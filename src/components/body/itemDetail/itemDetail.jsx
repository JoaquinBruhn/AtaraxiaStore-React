import React from "react";
import { useParams } from "react-router-dom";
import Item from "./item/item";
import DBlist from "../../../data/data";

import "./itemDetail.css"

function ItemDetail(){
    const URLparams = useParams().itemID
    console.log(URLparams)

    const product = DBlist.filter((el)=>{
        return el.productId === URLparams
    })

    return(
        <Item product={product}/>
    )
}

export default ItemDetail