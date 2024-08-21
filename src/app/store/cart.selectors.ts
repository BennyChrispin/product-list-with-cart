import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCart = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCart,
  (state: CartState) => state.items
);

export const selectTotalPrice = createSelector(selectCart, (state: CartState) =>
  Object.values(state.items).reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )
);
