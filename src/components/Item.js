import React from 'react';

export const Item = ({ id, title, description, price, pictureUrl}) => {

    const cardStyle = {
        background: 'linear-gradient(to right bottom, #D9104D 5%, #ffffff 95%)'
    }

    return (

        <div className="col">
            <div className="card border-dark" style={cardStyle}>
                <img className="m-3" alt={description} src={`${process.env.PUBLIC_URL}${pictureUrl}`}/>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <p className="card-text text-end text-muted">$ { price }</p>
                </div>
            </div>
        </div>
    )
}

