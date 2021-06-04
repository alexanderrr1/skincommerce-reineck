import React, { useState } from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {

    const styles = {
        'backgroundColor': '#F4F4F4',
        'borderRadius': '.25rem'
    }

    const[ contador, setContador ] = useState(initial);

    const plusHandler = () => {

        if( contador < stock ) {
            setContador( contador + 1 );
        }

    }

    const minusHandler = () => {
        
        if ( contador > 1 ) {
            setContador(contador -1);
        }

    }

    return (
        <>
            <div className="container col-xl-3" style={styles}>
                
                <div className="row">
                    <label className="form-label mt-1">Item</label>
                </div>

                <div className="row">
                    <div className="input-group mb-2">
                        <button className="btn btn-secondary" type="button" onClick={minusHandler}><strong>-</strong></button>
                        <input className="form-control" style={{'textAlign': 'center'}} disabled value={contador}/>
                        <button className="btn btn-secondary" type="button" onClick={plusHandler}><strong>+</strong></button>
                    </div>
                </div>

                <div className="row">
                    <div className="d-grid gap-2 mb-2">
                        <button className="btn btn-outline-danger" type="button" onClick={() => onAdd(contador)}>Agregar al carrito</button>
                    </div>
                </div>

            </div>

        </>
    );

}
