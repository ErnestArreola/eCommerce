import React, { useEffect } from 'react';
import {addToCart} from '../actions/cartActions';


function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;

    useEffect(()=> {
        if(productId){
            dispatchEvent(addToCart(productId, qty));
        }

        }, [])


    return <div>
        Cart Screen
    </div>

}

export default CartScreen;