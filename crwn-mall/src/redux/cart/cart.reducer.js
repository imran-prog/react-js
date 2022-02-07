import { cartActions } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActions.Toggle_Cart_Hidden:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActions.Add_Item:
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
