import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greetings }) => {

    const { category } = useParams();

    const [loading, setLoading] = useState();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        let itemByCategory;
        if(category === undefined) {
            itemByCategory = itemCollection;
        } else {
            itemByCategory = itemCollection.where('category', '==', `${category}`);
        }
        itemByCategory.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log("No results!");
            }
            setProductos(querySnapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            })
                
            ));
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            setLoading(false);
        })
    }, [category]);

    return (
        <div className="m-3">
            <h1>{ greetings }</h1>
            <ItemList 
                productos = { productos } 
                loading = { loading } 
                />
        </div>
    );
    
}
