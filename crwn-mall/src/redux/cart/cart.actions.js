import { cartActions } from "./cart.types";

const toggleCart = () => ({
  type: cartActions.Toggle_Cart_Hidden,
});

export default toggleCart;
