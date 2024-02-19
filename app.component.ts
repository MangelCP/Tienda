// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-product-list></app-product-list>
    <app-cart></app-cart>
  `
})
export class AppComponent {}
