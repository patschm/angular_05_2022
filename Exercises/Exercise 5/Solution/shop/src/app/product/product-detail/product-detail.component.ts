import { ProductGroup, Product} from '../../entities/entities';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductActions, ProductgroupActions, RootStore } from '../../store';
import { ProductService, ProductgroupService } from '../../services';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product$: Observable<Product>;
  public productGroup: ProductGroup = new ProductGroup();

  public ngOnInit() {

      const id = +this.route.snapshot.params.id;
      this.product$ = this.prods.product(id)
        .pipe(tap(p=>{
          this.store.dispatch(ProductActions.selectProduct(p));
          this.groups.productgroup(p.productGroup.id)
            .subscribe(pg=>{
              this.productGroup = pg;
              this.store.dispatch(ProductgroupActions.selectProductgroup(pg));
            })
        }));
  }
  constructor(
    private store: Store<RootStore.IState>,
    private prods: ProductService,
    private groups: ProductgroupService,
    private route: ActivatedRoute) {
  }

}
