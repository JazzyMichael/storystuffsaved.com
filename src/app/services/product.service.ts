import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imagePath: string;
  imageUrl: string;
  bestbuyUrl: string;
  category: string;
  saved?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product$: BehaviorSubject<Product[]>;

  constructor(private afs: AngularFirestore) {
    const cachedProducts: Product[] = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    const savedProducts: Product[] = localStorage.getItem('savedProducts') ? JSON.parse(localStorage.getItem('savedProducts')) : [];

    this.product$ = new BehaviorSubject(cachedProducts);

    this.afs.collection('products').valueChanges({ idField: 'id' })
      .pipe(
        catchError(error => {
          this.product$.next(cachedProducts);
          return empty();
        }),
        startWith(cachedProducts),
        map((products: Product[]) => {
          return products.map(product => {
            const savedProduct: Product = savedProducts.find(s => s.id === product.id);
            product.saved = savedProduct ? true : false;
            return product;
          });
        })
      )
      .subscribe((products: Product[]) => {
        if (products && products.length) {
          localStorage.setItem('products', JSON.stringify(products));
          this.product$.next(products);
        }
      });
  }

  saveProduct(product: Product) {
    const products = this.product$.getValue();
    const saved = localStorage.getItem('savedProducts') ? JSON.parse(localStorage.getItem('savedProducts')) : [];

    const newSaved: Product[] = [ ...saved, product ];

    localStorage.setItem('savedProducts', JSON.stringify(newSaved));

    const newProducts: Product[] = products.map(p => {
      if (p.id === product.id) {
        p.saved = true;
      }
      return p;
    });

    this.product$.next(newProducts);
  }

  removeProduct(product: Product) {
    const products: Product[] = this.product$.getValue();
    const saved: Product[] = localStorage.getItem('savedProducts') ? JSON.parse(localStorage.getItem('savedProducts')) : [];

    const index: number = saved.findIndex(x => x.id === product.id);

    if (index > -1) {
      saved.splice(index, 1);
      localStorage.setItem('savedProducts', JSON.stringify(saved));

      const newProducts: Product[] = products.map(p => {
        if (p.id === product.id) {
          p.saved = false;
        }
        return p;
      });

      this.product$.next(newProducts);
    }
  }

}
