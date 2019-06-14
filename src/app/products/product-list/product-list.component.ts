import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() saved: boolean;

  constructor(public productService: ProductService) { }

  showNothingSaved(products): boolean {
    return this.saved && !products.some(p => p.saved);
  }
}
