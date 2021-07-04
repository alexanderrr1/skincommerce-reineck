import React, { useContext } from 'react'
import CartContext from '../context/CartContext'


export const Cart = () => {

    const { cache, clear } = useContext(CartContext);

    return (
        <div className="m-3">
            <h1>CART</h1>
            <button onClick={()=>clear()}>Quitar todos los elementos</button>
            <button onClick={()=>console.log({cache})}>Consolear Cache</button>
        </div>
    )
}
