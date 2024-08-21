import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToCart,
  updateCartItem,
  removeFromCart,
} from '../store/cart.actions';
import { Product } from '../product.model';
import { Observable } from 'rxjs';
import { selectCartItems } from '../store/cart.selectors';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  isInCart: boolean = false;
  quantity: number = 0;
  cartItems$: Observable<{
    [productId: number]: { product: Product; quantity: number };
  }>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartItems$.subscribe((items) => {
      const item = items[this.product.id];
      if (item) {
        this.isInCart = true;
        this.quantity = item.quantity;
      } else {
        this.isInCart = false;
        this.quantity = 0;
      }
    });
  }

  addToCart() {
    this.store.dispatch(addToCart({ product: this.product }));
  }

  incrementQuantity() {
    this.updateQuantity(this.product.id, this.quantity + 1);
  }

  decrementQuantity() {
    this.updateQuantity(this.product.id, this.quantity - 1);
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity > 0) {
      this.store.dispatch(updateCartItem({ productId, quantity }));
    } else {
      this.store.dispatch(removeFromCart({ productId }));
    }
  }
}
