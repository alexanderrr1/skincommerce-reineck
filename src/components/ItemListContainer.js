import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList';
import { productList } from '../data/productList';
import { useParams } from 'react-router-dom';


const productListPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(productList);
    }, 2000);
});

export const ItemListContainer = ({ greetings }) => {
    const { category } = useParams();
    
    const getProductsByCategory = ( category ) => {
        return productList.filter( product => product.category === category );
    };

    console.log(getProductsByCategory(category));

    const [productos, setProductos] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {
        productListPromise.then( data => {
            setProductos({
                data: getProductsByCategory(category),
                loading: false
            })
        })
    }, [productos]);

    return (
        <div className="m-3">
            <h1>{ greetings }</h1>
            <ItemList productos = { productos } />
        </div>
    );
}
