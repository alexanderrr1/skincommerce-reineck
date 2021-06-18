import React from 'react';
import './Item.css';

export const Item = ({ id, title, description, price, pictureUrl}) => {

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card border-dark myCard">
                <img className="m-3" alt={description} src={`${process.env.PUBLIC_URL}${pictureUrl}`}/>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <p className="card-text text-end text-muted">$ { price }</p>
                </div>
            </div>
        </div>
    );

}

