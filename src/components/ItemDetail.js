import React from 'react'

export const ItemDetail = ({ item }) => {

    const cardStyle = {
        background: 'linear-gradient(to right bottom, #D9104D 5%, #ffffff 95%)'
    }

    return (
        <div className="row justify-content-center">
            <div className="m-3">
                
                { item.loading && <p>Loading...</p> }

                { !item.loading &&
                    <div className="col animate__animated animate__fadeIn">
                        <div className="card border-dark" style={cardStyle}>
                            <img className="m-3" alt={item.data.description} src={`${process.env.PUBLIC_URL}${item.data.pictureURL}`}/>
                            <div className="card-body">
                                <h5 className="card-title">{ item.data.title }</h5>
                                <p className="card-text">{ item.data.description }</p>
                                <p className="card-text text-end text-muted">$ { item.data.price }</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
