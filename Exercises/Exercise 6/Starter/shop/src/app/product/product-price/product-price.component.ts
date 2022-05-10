import { Price } from '../../entities/entities';
import { Component, OnInit } from '@angular/core';
import { ProductSelectors, RootStore, ProductStore } from '../../store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  public prices$: Observable<Price[]>;

  public ngOnInit() {

    this.store.select(ProductSelectors.productSelect)
    .pipe(map((st:ProductStore.IProductState)=>st.currentProduct))
    .subscribe(p=>{
      this.prices$ = this.http.prices(p.id);
    });
      
  }
  constructor(private http: ProductService, private store: Store<RootStore.IState>) {
  }
}
