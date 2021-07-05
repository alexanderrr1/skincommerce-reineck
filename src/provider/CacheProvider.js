import React, {useState} from 'react';
import CartContext from '../context/CartContext';

export default function CacheProvider({ defaultValue = [] , children }) {

    const [ cache, setCache ] = useState( defaultValue );
    const [ cartTotalAmount, setCartTotalAmount] = useState(0);
    
    function getFromCart(id){
        return cache.find(x => x.item.data.id === id);
    }
    
    function isInCart({id}){
        return id === undefined ? undefined : getFromCart(id) !== undefined;
    }
    
    function discountAmount(id){
        var unitPrice = cache.filter(x => x.item.data.id === id);
        var amountToDiscount = unitPrice[0].item.data.price * unitPrice[0].amountToBuy
        setCartTotalAmount(cartTotalAmount - amountToDiscount)
    }

    function addItem(obj) {
        if(isInCart(obj.item.data)){
            removeItem(obj.item.data.id);
            setCache([...cache, obj]);
            return;
        }
        var amountToIncrease = obj.item.data.price * obj.amountToBuy;
        setCache([...cache, obj]);
        setCartTotalAmount(cartTotalAmount + amountToIncrease);
    }
    
    function removeItem(id){
        discountAmount(id);
        var newCache = cache.filter(x => x.item.data.id !== id)
        setCache( newCache );
    }
    
    function clear(){
        setCache(defaultValue);
    }
    
    return(
        <CartContext.Provider
            value = {{ cache, addItem, clear, removeItem, cacheSize: cache.length, cartTotalAmount }}
        >
            { children }
        </CartContext.Provider>
    );

}