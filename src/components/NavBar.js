import React from 'react';
import { NavLink } from 'react-router-dom';
import skinCommerceLogo from '../assets/skinCommerce.png';
import { CartWidget } from './CartWidget';
import './NavBar.css';

export const NavBar = () => {

  const logoStyle = {
    maxHeight: '110px',
    maxWidth: '110px'
  }

  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" activeClassName="selected" style={logoStyle} exact to={"/"}>
          <img 
            alt="SkinCommerce"
            src={skinCommerceLogo}
            height='100%'
            width='100%'
          />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/knife"}>Knife</NavLink></li>
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/pistol"}>Pistol</NavLink></li>
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/heavy"}>Heavy</NavLink></li>
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/smg"}>SMG</NavLink></li>
            <li className="nav-item ms-3 me-3"><NavLink className="nav-link" activeClassName="selected" exact to={"/category/rifle"}>Rifle</NavLink></li>
            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
  
}