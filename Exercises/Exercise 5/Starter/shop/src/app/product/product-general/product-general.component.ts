import { Product, ProductGroup } from '../../entities/entities';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductStore, ProductgroupStore, ProductSelectors, ProductgroupSelectors, RootStore } from '../../store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-general',
  templateUrl: './product-general.component.html',
  styleUrls: ['./product-general.component.css']
})
export class ProductGeneralComponent implements OnInit {

  public product$: Observable<Product>;
  public productGroup$: Observable<ProductGroup>;

  public ngOnInit() {
      this.product$ = this.store.select(ProductSelectors.productSelect)
        .pipe(map((ps: ProductStore.IProductState)=>ps.currentProduct));
      this.productGroup$ = this.store.select(ProductgroupSelectors.productgroupSelect)
        .pipe(map((st:ProductgroupStore.IProductgroupState)=>st.currentProductgroup));
  }
  
  constructor(private store: Store<RootStore.IState>) {
  }

}
