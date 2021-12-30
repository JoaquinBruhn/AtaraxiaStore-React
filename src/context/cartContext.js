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

    const clearCart = ()=>{
        setCartList([])
    }

    function addToCart(e) {
        const cartCheck = cartList.findIndex(o=>o.productId === e.productId)

        if (cartCheck !== -1){
            cartList[cartCheck].amountSelected = e.amountSelected
        }else{
            setCartList([...cartList, e])
        }
    }

    function removeFromCart(e) {
        const newCartList = cartList.filter(o=>o.productId !== e.productId)
        
        setCartList(newCartList)
    }
    
//----------------------------------------------------

    const data = {contextTest, handleContextTest, cartList, clearCart, removeFromCart, addToCart}

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext