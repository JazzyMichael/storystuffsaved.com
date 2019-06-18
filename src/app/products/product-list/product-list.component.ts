import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges {
  @Input() saved: boolean;
  @Input() categories: any[];
  product$: any;

  constructor(public productService: ProductService) {
    this.product$ = this.productService.product$;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.categories) {
      if (this.categories && this.categories.length) {
        this.product$ = this.productService.product$.pipe(
          switchMap(products => {
            const filtered = products.filter(product => {
              return this.categories.some(c => product.category === c);
            });
            return of(filtered);
          })
        );
      } else {
        this.product$ = this.productService.product$;
      }
    }
  }

  showNothingSaved(products): boolean {
    return this.saved && !products.some(p => p.saved);
  }
}
