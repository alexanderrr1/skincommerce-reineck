import React from 'react';
import { Item } from './Item';
import { NavLink } from 'react-router-dom';
import './ItemList.css'

export const ItemList = ({ productos }) => {

    return (
        <div className="m-3 row row-cols-1 row-cols-md-5 g-4">

            { productos.loading && <p>Loading...</p> }  

            {
                productos.data.map(x => (
                    <NavLink className="" exact to={`/item/${x.id}`}>
                        <Item 
                            key = { x.id }
                            title = { x.title }
                            description = { x.description }
                            price = { x.price }
                            pictureUrl = { x.pictureUrl }
                        />
                    </NavLink>

                ))
            }
        </div>
    )
}
