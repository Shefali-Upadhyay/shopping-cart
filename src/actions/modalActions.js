import { SHOW_MODAL, HIDE_MODAL, EDIT_COLOUR, EDIT_SIZE, EDIT_QUANTITY, SAVE_EDIT} from './types';

export const showModal = (itemId) => (dispatch) => {
  return dispatch({
    type: SHOW_MODAL,
    payload: itemId
  })
}

export const hideModal = () => (dispatch) => {
  return dispatch({
    type: HIDE_MODAL
  })
}

export const editColour = (colour) => (dispatch) => {
  return dispatch({
    type: EDIT_COLOUR,
    payload: colour
  })
}

export const editSize = (size) => (dispatch) => {
  return dispatch({
    type: EDIT_SIZE,
    payload:size
  })
}

export const editQuantity = (quantity) => (dispatch) => {
  return dispatch({
    type: EDIT_QUANTITY,
    payload:quantity
  })
}

export const saveEdit = (editItem, items, itemColour, itemSize, itemQuantity) => (dispatch) => {
  const cartItems = items.slice();
  cartItems.forEach(item => {
    //here we check if the product is already present in the cart or not
    //if present, we are changing the value as true and incrementing the item count
    if (item.p_id === editItem) {
      item.p_selected_color.name = itemColour;
      item.p_selected_size.code = itemSize;
      item.count = itemQuantity;
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return dispatch({
    type: SAVE_EDIT,
    payload: {cartItems}
  })
}