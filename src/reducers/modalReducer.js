import { EDIT_COLOUR, EDIT_SIZE, EDIT_QUANTITY} from '../actions/types';

const initialState = {
  itemColour: '',
  itemSize: '',
  itemQuantity: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_COLOUR:
      return {
        ...state, 
        itemColour: action.payload
      };
    case EDIT_SIZE:
      return {
        ...state,
        itemSize: action.payload
      };
    case EDIT_QUANTITY:
      return {
        ...state,
        itemQuantity: action.payload
      };
    default:
      return state;
  }
}