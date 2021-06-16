import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList';
import { productList } from '../data/productList';


const productListPromise = new Promise((resolve, reject) => {
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
