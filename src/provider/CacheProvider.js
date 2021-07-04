import React, {useState} from 'react';
import CartContext from '../context/CartContext';

export default function CacheProvider({ defaultValue = [] , children }) {

    const [ cache, setCache ] = useState( defaultValue );
    
    function getFromCart(id){
        return cache.find(x => x.item.data.id === id);
    }
    
    function isInCart({id}){
        return id === undefined ? undefined : getFromCart(id) !== undefined;
    }
    
    function addItem(obj) {
        if(isInCart(obj.item.data)){
            console.log("Elemento ya en carrito");
            return;
        }
        setCache([...cache, obj]);
    }
    
    function removeItem(id){
        var positionOfItemToRemove = cache.indexOf(getFromCart(id));
        if(positionOfItemToRemove !== -1){
            cache.splice(positionOfItemToRemove, 1);
        }
        console.log(cache);
    }
    
    function clear(){
        setCache(defaultValue);
    }
    
    return(
        <CartContext.Provider
            value = {{ cache, addItem, clear }}
        >
            { children }
        </CartContext.Provider>
    );

}