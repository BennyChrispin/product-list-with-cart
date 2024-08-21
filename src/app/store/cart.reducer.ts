import { createReducer, on } from '@ngrx/store';
import { Product } from '../product.model';
import {
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from './cart.actions';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: { [productId: number]: CartItem };
}

export const initialState: CartState = {
  items: {},
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const existingItem = state.items[product.id];
    const newQuantity = existingItem ? existingItem.quantity + 1 : 1;

    return {
      ...state,
      items: {
        ...state.items,
        [product.id]: { product, quantity: newQuantity },
      },
    };
  }),
  on(updateCartItem, (state, { productId, quantity }) => {
    const existingItem = state.items[productId];
    if (!existingItem) return state;

    return {
      ...state,
      items: {
        ...state.items,
        [productId]: { ...existingItem, quantity },
      },
    };
  }),
  on(removeFromCart, (state, { productId }) => {
    const { [productId]: removedItem, ...remainingItems } = state.items;

    return {
      ...state,
      items: remainingItems,
    };
  }),
  on(clearCart, (state) => ({
    ...state,
    items: {},
  }))
);
