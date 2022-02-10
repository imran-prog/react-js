import { cartActions } from "./cart.types";

const toggleCart = () => ({
  type: cartActions.Toggle_Cart_Hidden,
});

export const addItem = (item) => ({
  type: cartActions.Add_Item,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActions.REMOVE_ITEM,
  payload: item,
});

export default toggleCart;
