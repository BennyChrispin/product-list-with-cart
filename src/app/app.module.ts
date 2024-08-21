import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from './cart.module';
import { ProductModule } from './product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CartModule,
    ProductModule,
    StoreModule.forRoot({ cart: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
