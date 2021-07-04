import React, { useContext } from 'react'
import CartContext from '../context/CartContext'


export const Cart = () => {

    const { cache, clear } = useContext(CartContext);

    return (
        <div className="m-3">
            <h1>CART</h1>
        </div>
    )
}
