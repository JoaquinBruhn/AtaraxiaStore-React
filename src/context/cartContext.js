import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [contextTest, setContextTest] = useState("")

    const handleContextTest = (e)=>{
        e.preventDefault()
        setContextTest(e.target.contextTest.value)
        e.target.contextTest.value = ""
    }

//----------------------------------------------------

    const [cartList, setCartList] = useState([])

    function addToCart(e) {
        console.log(e)
        setCartList([...cartList, e])
    }
    console.log(cartList)
    
//----------------------------------------------------

    const data = {contextTest ,handleContextTest, addToCart}

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext