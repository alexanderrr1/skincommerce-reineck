import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
    return (
        <li className= "nav-item ms-5 me-5">
            <NavLink className="nav-link" activeClassName="selected" exact to={"/shop"}>
                <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
        </li>
    )
}
