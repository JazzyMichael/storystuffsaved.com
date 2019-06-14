import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StuffRoutingModule } from './stuff-routing.module';
import { StuffComponent } from './stuff.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [
    StuffComponent
  ],
  imports: [
    CommonModule,
    StuffRoutingModule,
    ProductsModule
  ]
})
export class StuffModule { }
