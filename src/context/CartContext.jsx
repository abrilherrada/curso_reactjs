import { createContext, useState, useContext, useEffect } from 'react';
import swal from 'sweetalert';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList));
    }, [cartList]);

    const isInCart = (id) => {
        return cartList.some((item) => item.id === id);
    };

    const addItem = (item, wantedQuantity) => {
        if (isInCart(item.id)) {
            let itemIndex = cartList.findIndex((prod) => prod.id === item.id);
            if (
                item.stock - cartList[itemIndex].quantity - wantedQuantity <
                0
            ) {
                swal(
                    'Stock insuficiente',
                    `En este momento, solo tenemos ${
                        item.stock - cartList[itemIndex].quantity
                    } unidades disponibles.`,
                    'error'
                );
            } else {
                cartList[itemIndex].quantity += item.quantity;
            }
            localStorage.setItem('cart', JSON.stringify(cartList));
        } else {
            setCartList([...cartList, item]);
        }
    };

    const clear = () => {
        setCartList([]);
    };

    const removeItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    };

    const total = () => {
        let total = 0;
        cartList.forEach((item) => (total += item.price * item.quantity));
        return total;
    };

    const totalQuantity = () => {
        let totalQuantity = 0;
        cartList.forEach((item) => (totalQuantity += item.quantity));
        return totalQuantity;
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                addItem,
                clear,
                removeItem,
                total,
                totalQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
