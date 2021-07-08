import React, { useContext } from 'react'
import CartContext from '../context/CartContext';

export const CartItem = ({item}) => {

    const { removeItem } = useContext(CartContext);

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <img style={{"maxWidth":"100%"}} alt={item.item.data.description} src={`${process.env.PUBLIC_URL}${item.item.data.pictureUrl}`}/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                    <h5 className="card-title">{ item.item.data.title }</h5>
                    <p className="card-text"><small className="text-muted">{ item.item.data.description }</small></p>
                    <p className="card-text">Cantidad a comprar: { item.amount }, costo individual: $ { item.item.data.price }</p>
                    <p className="card-text"><strong>Costo Total: ${ item.item.data.price * item.amount }</strong></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary main-color m-3" onClick={() => removeItem(item.item.data.id)}>Quitar del carrito</button>
                </div>
            </div>
        </div>
    )
}
