import React, { useEffect, useState } from 'react'
import { Item } from './Item'

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


export const ItemList = () => {

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
    
    console.log(productos);

    return (
        <div className="m-3 row row-cols-1 row-cols-md-5 g-4">
            {
                productos.data.map(x => (
                    <Item 
                        key = { x.id }
                        title = { x.title }
                        description = { x.description }
                        price = { x.price }
                        pictureUrl = { x.pictureUrl }
                    />
                ))
            }
        </div>
    )
}
