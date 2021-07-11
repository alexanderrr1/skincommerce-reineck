import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const itemById = itemCollection.doc(id);

        itemById.get().then((querySnapshot) => {
            if(Object.keys(querySnapshot).length === 0){
                console.log("No results!");
            }
            setItem(querySnapshot.data());
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            setLoading(false);
        })
    }, [id])

    return (
        <div className="m-3 row justify-content-center">
            <div className="m-3 col-4 text-center">
                <h1>Item Detail Container</h1>
                { loading && <p>Loading...</p> }  
                { !loading &&
                    <ItemDetail item = { item } />
                }
            </div>
        </div>
    );
}