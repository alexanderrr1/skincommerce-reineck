import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext'
import { CartItem } from './CartItem';
import './Cart.css'

export const Cart = () => {

    const { cache, clear, cacheSize, cartTotalAmount } = useContext(CartContext);

    return (
        <div className="m-3">
            <h1>CART</h1> 
            
            { cacheSize !== 0 &&
                <button className="btn btn-primary main-color mb-2" disabled>Total de compra: $ {cartTotalAmount}</button>
            }

            { cacheSize === 0 && 
                <div className="card m-3">
                    <div>
                        <p className="texto-centrado">No dispone de items agregados</p>
                    </div>
                    <NavLink className="btn btn-primary main-color" exact to={"/"}>Volver al inicio</NavLink>
                </div>
            }

            { cacheSize !== 0 &&
                <div>
                    <div>
                        {
                            cache.map( item =>
                                <div key={item.item.id}>
                                    <CartItem
                                        item = { item }
                                    />
                                </div>
                            )
                        }  
                    </div>
                    <NavLink className="btn btn-primary main-color m-1" exact to={"/"}>Seguir Comprando</NavLink>
                    <button className="btn btn-primary main-color m-1" onClick={() => clear()}>Vaciar carrito</button>
                    <NavLink className="btn btn-primary main-color m-1" exact to={"/finishOrder"}>Finalizar Compra</NavLink>
                </div>
            }

        </div>
    )
}
