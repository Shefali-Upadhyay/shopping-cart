import{ ADD_TO_CART, REMOVE_FROM_CART} from './types';

export const addToCart = (items, product) => (dispatch) => {
  //here we are creating a copy of the cartItem
  const cartItems = items.slice();
  let productAlreadyInCart = false;
  cartItems.forEach(item => {
    //here we check if the product is already present in the cart or not
    //if present, we are changing the value as true and incrementing the item count
    if (item.p_id === product.p_id) {
      productAlreadyInCart = true;
      item.count++;
    }
  });
  if (!productAlreadyInCart) {
    cartItems.push({...product,count: 1});
  }
  //here we are creating a variable in local storage and assigning the cart item value
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //here we are returning cartItems, to keep the Cart component updated
  return dispatch({
    type: ADD_TO_CART,
    payload: {cartItems: cartItems}
  });
}

export const removeFromCart = (items, item) => (dispatch) => {
  const cartItems = items.slice().filter(deleteItem => deleteItem.p_id !== item.p_id);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: {cartItems}
  });
}
