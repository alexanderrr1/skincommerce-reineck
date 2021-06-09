import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList';

const productList = [
    {
        id: '0',
        title: 'M4A4',
        description: 'The Emperor',
        price: 11445,
        pictureUrl: '/assets/images/m4-emperor.png'
        
    },
    {
        id: '1',
        title: 'AK-47',
        description: 'Asiimov',
        price: 12650,
        pictureUrl: '/assets/images/ak47-asiimov.png'
    }
];

const productListPromise = new Promise((resolve, reject) => {
    console.log('Esperando 2 segundos');
    setTimeout(function() {
      resolve(productList);
    }, 2000);
});

export const ItemListContainer = ({ greetings }) => {
    
    const [productos, setProductos] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {
        productListPromise.then( data => {
            setProductos({
                data: data,
                loading: false
            })
        })
    }, []);

    return (
        <div className="m-3">
            <h1>{ greetings }</h1>
            <ItemList productos = { productos } />
        </div>
    );

}
