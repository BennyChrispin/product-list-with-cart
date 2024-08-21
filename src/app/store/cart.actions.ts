import { createAction, props } from '@ngrx/store';
import { Product } from '../product.model';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: Product }>()
);

export const updateCartItem = createAction(
  '[Cart] Update Cart Item',
  props<{ productId: number; quantity: number }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
