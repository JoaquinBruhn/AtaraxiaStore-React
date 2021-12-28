import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState("")

    const data = {cart, setCart}

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext