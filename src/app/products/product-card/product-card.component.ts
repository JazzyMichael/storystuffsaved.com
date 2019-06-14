import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() removable: boolean;

  constructor(private productService: ProductService) { }

  save() {
    this.productService.saveProduct(this.product);
  }

  remove() {
    this.productService.removeProduct(this.product);
  }

  imageClick() {
    window.open(this.product.imageUrl, '_blank');
  }
}
