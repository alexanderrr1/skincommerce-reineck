import React from 'react';
import skinCommerceLogo from '../assets/skinCommerce.png';
import { CartWidget } from './CartWidget';

export const NavBar = () => {

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img 
              src={skinCommerceLogo}
              height='15%'
              width='15%'
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item ms-5 me-5"><a className="nav-link" href="/#">Knife</a></li>
              <li className="nav-item ms-5 me-5"><a className="nav-link" href="/#">Pistol</a></li>
              <li className="nav-item ms-5 me-5"><a className="nav-link" href="/#">Heavy</a></li>
              <li className="nav-item ms-5 me-5"><a className="nav-link" href="/#">SMG</a></li>
              <li className="nav-item ms-5 me-5"><a className="nav-link" href="/#">Rifle</a></li>
              <CartWidget />
            </ul>
          </div>
        </div>
      </nav>

    );

}