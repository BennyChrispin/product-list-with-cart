import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
@NgModule({
  declarations: [CartComponent, CartItemComponent, CartModalComponent],

  imports: [CommonModule],
  exports: [CartComponent],
})
export class CartModule {}
