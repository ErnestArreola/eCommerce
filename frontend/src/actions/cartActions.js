import Axios from "axios"
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch) => {

    try{
        const {data} = await Axios.get("/api/products/" + productId);
        dispatch({type: CART_ADD_ITEM, payload:{
            product:  data._id,
            name: data.name,
            name: data.image,
            price: data.name,
            countInStock: data.countInStock,
            qty

        }})

    }catch (error) {

    }
}


export {addToCart}