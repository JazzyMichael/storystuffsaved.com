import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ImgCachePipe } from '../pipes/img-cache.pipe';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    ImgCachePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
