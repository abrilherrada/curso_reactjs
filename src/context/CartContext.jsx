import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    
    const isInCart = (id) => {
        return cartList.some(item => item.id === id)
    }

    const addItem = (item) =>{
        if (isInCart(item.id)) {
            let itemIndex = cartList.findIndex(prod => prod.id === item.id)
            cartList[itemIndex].quantity += item.quantity
        }
        else {
            setCartList([...cartList, item])
        }
    }

    const clear = () => {
        setCartList([])
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }
    
    const total = () => {
        let total = 0;
        cartList.forEach(item => total += item.price * item.quantity)
        return total
    }
    
    return (
        <CartContext.Provider value={{cartList, addItem, clear, total, removeItem}}>
            {children}
        </CartContext.Provider>
        )
}

export default CartContextProvider