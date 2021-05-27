import React from 'react';

export const NavBar = () => {

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container-fluid">
          
          <a className="navbar-brand" href="/#">SkinCommerce</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
              <li className="nav-item"><a className="nav-link" aria-current="page" href="/#">Link 1</a></li>
              <li className="nav-item"><a className="nav-link" href="/#">Link 2</a></li>
              <li className="nav-item"><a className="nav-link" href="/#" tabIndex="-1" aria-disabled="true">Link 3</a></li>
  
            </ul>
  
          </div>
  
        </div>
        
      </nav>

    );

}