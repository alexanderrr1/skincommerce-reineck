import React from 'react'
import { ItemList } from './ItemList';

export const ItemListContainer = ({ greetings }) => {

    return (
        <div className="m-3">
            <h1>{ greetings }</h1>
            <ItemList />
        </div>
    );

}
