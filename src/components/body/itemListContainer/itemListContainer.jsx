import React, {useState} from "react";
import {Container, Row} from "react-bootstrap"
import ItemList from "./itemList/itemList";
import DBlist from "../../../data/data"

import "./itemListContainer.css"

function ItemListContainer({greeting}){

    const [productList, setProductList] = useState(null)

    const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(DBlist)
        },3000)
    })

    prom.then((res)=>{
        setProductList(res)
    })

    return(
        <Container>
            <Row>
                <h3 className="item-greeting">{greeting}</h3>
                {productList==null ? 
                    <div id="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                :
                    <ItemList list={DBlist}/>
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer