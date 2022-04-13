import { createContext, useState } from "react";


export const CartContext = createContext ()


export const CartProvider = ({children}) => {

    const [cart, setCart]= useState ([])

    const addItem = (item) => {
        setCart ([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some (producto => producto.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce ((acc,producto) => acc+= producto.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce ((acc,producto) => acc += producto.price * producto.cantidad, 0)
    }

    const emptyCart = () => {
        setCart ([])
    }

    const removeItem = (id) => {
        setCart (cart.filter((producto) => producto.id !== id ))
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem
            }}>
            {children}

        </CartContext.Provider>
    )
}