import { Product, ProductGroup } from '../../entities/entities';
import { Component, OnInit } from '@angular/core';
import { ProductgroupActions, RootStore } from '../../store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductgroupService, ProductService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products$: Observable<Product[]>;
  public productGroup: ProductGroup = new ProductGroup();

  public ngOnInit() {
     const pgID = +this.route.snapshot.params.pgid;
     this.groups.productgroup(pgID)
      .subscribe(p => {
          this.productGroup = p;
          this.store.dispatch(ProductgroupActions.selectProductgroup(p));
        });
     this.products$ = this.prods.products(pgID);
  }

  constructor(
    private store: Store<RootStore.IState>,
    private groups: ProductgroupService,
    private prods: ProductService,
    private route: ActivatedRoute) {
  }
}
