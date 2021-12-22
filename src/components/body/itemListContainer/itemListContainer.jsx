import React, {useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap"
import ItemList from "./itemList/itemList";
import DBlist from "../../../data/data"

import "./itemListContainer.css"
import { useParams } from "react-router-dom";

const fullList = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(DBlist)
    },3000)
})
const filteredList = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(DBlist)
    },3000)
})


function ItemListContainer({greeting}){

    const categoria = useParams().category
    console.log(categoria)

    const [productList, setProductList] = useState(null)

    useEffect(()=>{
        if(categoria===undefined){
            fullList.then((res)=>{
                setProductList(res)
            })
        }else{
            filteredList.then((res)=>{
                   let filtered = res.filter((prod)=>{
                       return prod.category === categoria.toLowerCase()
                   })
                setProductList(filtered)
            })
        }
    },[categoria])

    return(
        <Container>
            <Row>
                <h3 className="item-greeting">{greeting}</h3>
                {productList==null ? 
                    <div id="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                :
                    <ItemList list={productList}/>
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer