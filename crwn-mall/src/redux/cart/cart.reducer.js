import { cartActions } from "./cart.types";
import { addItemToCart } from "./cart.utils";

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
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    case cartActions.REMOVE_ITEM:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
