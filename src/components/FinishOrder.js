import React, { useState, useContext } from 'react'
import CartContext from '../context/CartContext';
import firebase from 'firebase/app';
import '@firebase/firestore';
import { getFirestore } from '../firebase';


export const FinishOrder = () => {

    const { cache, cartTotalAmount } = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name] : event.target.value
        })
    }

    const onClickHandler = () => {

        const db = getFirestore();
        const orders = db.collection('orders');
        const newOrder = {
            buyer: buyer,
            items: cache,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartTotalAmount
        };

        orders.add(newOrder).then(({id}) => {
            alert(`El id de su compra es: ${id}`);
        }).catch(err => {
           alert("Ha ocurrido un error, su orden no se ha generado");
        })

    }

    return (
        <div className="m-4 col-4">
            <form onSubmit={e=> e.preventDefault()}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" name="name" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="name" aria-describedby="emailHelp" name="email" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp" name="phone" onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary main-color" onClick={() => onClickHandler()}>Enviar</button>
            </form>
        </div>
    )
}
