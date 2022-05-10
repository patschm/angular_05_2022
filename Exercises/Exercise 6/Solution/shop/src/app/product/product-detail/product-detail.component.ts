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

  public product: Product;
  public productGroup: ProductGroup = new ProductGroup();

  public ngOnInit() {
// TODO: 6
    // Modify this method to use the data from the resolver
    // hint: Use ActivateRoute's data property to access the resolver data
    this.route.data.subscribe((d: any) => {
      if (d.product == null) {
          return;
      }
      this.product = d.product;
      this.store.dispatch(ProductActions.selectProduct(d.product));
      this.groups.productgroup(this.product.productGroup.id)
        .subscribe(pg => {
          this.store.dispatch(ProductgroupActions.selectProductgroup(pg));
          this.productGroup = pg;
        });
    });
    // const id = +this.route.snapshot.params.id;
    // this.prods.product(id).subscribe(p => {
    //         this.product = p;
    //         this.state.setProduct(p);
    //         this.groups.productgroup(p.productGroup.id)
    //             .subscribe(pg => {
    //                 this.state.setProductGroup(pg);
    //                 console.log(pg);
    //                 this.productGroup = pg;
    //             });
    //     });
  }
  constructor(
    private store: Store<RootStore.IState>,
    private prods: ProductService,
    private groups: ProductgroupService,
    private route: ActivatedRoute) {
  }

}
