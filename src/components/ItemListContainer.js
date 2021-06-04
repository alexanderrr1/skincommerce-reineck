import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemListContainer = ({ greetings }) => {

    const onAdd = (amount) => {
        console.log(amount);
    }

    return (
        <div>
            <h1>{ greetings }</h1>
            <ItemCount 
                stock = {10}
                initial = {1}
                onAdd = {onAdd}
            />
        </div>
    );

}
