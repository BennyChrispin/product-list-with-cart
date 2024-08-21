import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../store/cart.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { clearCart } from '../store/cart.actions';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css'],
})
export class CartModalComponent {
  @Input() cartItems: { [productId: number]: CartItem } | null = null;
  @Input() total: Observable<number> | null = null;
  @Output() close = new EventEmitter<void>();

  constructor(private store: Store) {}

  closeModal() {
    this.close.emit();
  }

  startNewOrder() {
    this.store.dispatch(clearCart());
    this.closeModal();
  }
}
