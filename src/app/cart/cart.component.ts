import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectCartItems, selectTotalPrice } from '../store/cart.selectors';
import { CartItem } from '../store/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems$: Observable<{ [productId: number]: CartItem } | null>;
  total$: Observable<number>;
  totalItemCount$: Observable<number>;
  isModalOpen: boolean = false;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.total$ = this.store.select(selectTotalPrice);

    this.totalItemCount$ = this.cartItems$.pipe(
      map((cartItems) =>
        cartItems
          ? Object.values(cartItems).reduce(
              (total, item) => total + item.quantity,
              0
            )
          : 0
      )
    );
  }

  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
