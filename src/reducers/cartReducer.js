import{ ADD_TO_CART, REMOVE_FROM_CART, SHOW_MODAL, HIDE_MODAL, SAVE_EDIT} from '../actions/types';

//reducer evaluates the action and the current state, and then returns an updated state

const initialState = { 
  items:[],
  openModal: false,
  editItem: ''
};
//if no value for state is passed, initialState becomes the value
export default function(state=initialState, action){
  switch(action.type){
    case ADD_TO_CART:
    //here we are returning the default value of states and updating the items value
      return {
        ...state,
        items: action.payload.cartItems
      };
    case REMOVE_FROM_CART:
      return {
        ...state, 
        items: action.payload.cartItems
        };
    case SHOW_MODAL:
      return {
        ...state,
        openModal: true,
        editItem: action.payload
      }
    case HIDE_MODAL:
      return {
        ...state,
        openModal: false
      }
    case SAVE_EDIT:
      return {
        ...state,
        items: action.payload.cartItems,
        openModal: false
      }
    default: 
      return state;
  }
}