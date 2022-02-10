import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const selectCartItems = createSelector(
  [cartSelector],
  (cart) => cart.cartItem
);

export const selectCartItemsHidden = createSelector(
  [cartSelector],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItem) =>
    cartItem.reduce(
      (accumulatedValue, item) => accumulatedValue + item.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItem) =>
  cartItem.reduce(
    (accumulatedValue, item) => accumulatedValue + item.quantity * item.price,
    0
  )
);
