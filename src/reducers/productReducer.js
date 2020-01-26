import{ FETCH_PRODUCTS } from '../actions/types';

//reducer evaluates the action and the current state, and then returns an updated state

const initialState = { items:[] };
//if no value for state is passed, initialState becomes the value
export default function(state=initialState, action){
  switch(action.type){
    case FETCH_PRODUCTS: 
    //here we are returning the default value of states and updating the items value
      return {...state, items: action.payload};
    default: 
      return state;
  }
}