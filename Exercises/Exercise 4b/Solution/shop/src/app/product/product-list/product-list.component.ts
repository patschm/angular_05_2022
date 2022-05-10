import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ProductGroup, Product } from 'src/app/entities/entities';
import { ProductService } from '../../services/product.service';

import { IState } from '../../root-store/root.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy 
{
  // TODO: 12 
  // Declare a private field of type Subscription.
  // This field will be used to store the subscription for later to unsubscribe
  private subscription: Subscription;
  public productGroup: ProductGroup;
  public products$: Observable<Product[]>;

  public ngOnInit() {
    // TODO: 13
    // Subscribe to changes in the IProductGroupState node.
    // When a changes is detected, read the productgroup from the store
    // and load the corresponding products (code below)
    this.subscription = this.store.select(st=>st.productgroup)
      .subscribe({ 
        next: pg => { 
          this.productGroup = pg.currentProductgroup;
          this.products$ = this.prods.products(this.productGroup.id);
      }
     });
  }
  ngOnDestroy(): void {
    // TODO: 14 
    // Unsubscribe from the subscription created in ngOnInit
    // Test the application
    this.subscription.unsubscribe();
  }

  // TODO: 11 
  // Inject the ngrx Store for IState
  constructor(private prods: ProductService, private store: Store<IState>) {
  }
}
