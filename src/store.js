import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState={};
if (localStorage.getItem('cartItems')) {
  initialState.cart={items: JSON.parse(localStorage.getItem('cartItems'))};
}
export default createStore(rootReducer, initialState, applyMiddleware(thunk));