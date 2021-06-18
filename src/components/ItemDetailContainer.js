import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { productList } from '../data/productList';
import { ItemDetail } from './ItemDetail';

const itemToDetailPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(productList);
    }, 2000);
});

export const ItemDetailContainer = () => {

    const { id } = useParams();

    const getProductById = ( id ) => {
        return productList.find( product => product.id === id );
    }

    const[item, setItem] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {
        itemToDetailPromise.then( () => {
            setItem({
                data: getProductById(id),
                loading: false
            });
        });
    }, [item]);

    return (
        <div className="m-3 row justify-content-center">
            <div className="m-3 col-4 text-center">
                <h1>Item Detail Container</h1>
                <ItemDetail item = { item } />
            </div>
        </div>
    );
}