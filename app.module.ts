import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list.component';
import { CartComponent } from './cart.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [AppComponent, ProductListComponent, CartComponent],
  imports: [BrowserModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
