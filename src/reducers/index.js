import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  products: productReducer,
  cart:cartReducer,
  modal:modalReducer
})