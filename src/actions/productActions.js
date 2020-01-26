import { FETCH_PRODUCTS } from "./types"

//below we are creating product actions
//dispatch() is the method used to dispatch actions and trigger state changes to the store
export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:8000/productsInCart").then(result => result.json())
    .then(data => {
      return dispatch({
        //payload is the information that is being passed to the store 
        type: FETCH_PRODUCTS,
        payload: data
      })
    });
}