import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedRoutingModule } from './saved-routing.module';
import { SavedComponent } from './saved.component';
import { ProductsModule } from '../products/products.module';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [
    SavedComponent
  ],
  imports: [
    CommonModule,
    SavedRoutingModule,
    ProductsModule,
    ContactModule
  ]
})
export class SavedModule { }
