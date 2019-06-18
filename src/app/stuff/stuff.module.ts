import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { StuffRoutingModule } from './stuff-routing.module';
import { StuffComponent } from './stuff.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [
    StuffComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    StuffRoutingModule,
    ProductsModule
  ]
})
export class StuffModule { }
