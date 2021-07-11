import React from 'react';
import { Item } from './Item';
import { NavLink } from 'react-router-dom';
import './ItemList.css';

export const ItemList = ({ productos, loading }) => {

    return (
        <div className="m-3 row row-cols-1 row-cols-md-5 g-4">

            { loading && <p>Loading...</p> }  

            { !loading &&
                productos.map(x => (
                    <NavLink className="" key = { x.id } exact to={`/item/${x.id}`}>
                        <Item
                            title = { x.title }
                            description = { x.description }
                            price = { x.price }
                            pictureUrl = { x.pictureUrl }
                        />
                    </NavLink>
                ))
            }
        </div>
    );

}
