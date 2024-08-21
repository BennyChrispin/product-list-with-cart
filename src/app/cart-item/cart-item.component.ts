import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateCartItem, removeFromCart } from '../store/cart.actions';
import { Product } from '../product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() item!: CartItem;
  count: any;

  constructor(private store: Store) {}

  removeItem(item: CartItem) {
    this.store.dispatch(removeFromCart({ productId: item.product.id }));
  }
}
