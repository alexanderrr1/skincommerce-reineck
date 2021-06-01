import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
export const CartWidget = () => {
    return (
        <li className= "nav-item ms-5 me-5 nav-link">
            <FontAwesomeIcon icon={faShoppingCart} />
        </li>
    )
}
