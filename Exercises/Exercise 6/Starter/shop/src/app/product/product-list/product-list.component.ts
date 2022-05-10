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

  public products: Product[];
  public productGroup: ProductGroup = new ProductGroup();

  public ngOnInit() {
     const pgID = +this.route.snapshot.params.pgid;
     this.groups.productgroup(pgID)
      .subscribe(p => {
          this.productGroup = p;
          this.store.dispatch(ProductgroupActions.selectProductgroup(p));
        });

     // TODO: 4
    // Retrieve the data from the ProductListResolver and assign it to this.products
    // Hint: use ActivateRoute's data property to get the list of products.
    // Test the application
    this.prods.products(pgID).subscribe(r=>{
      this.products = r;
    });
  }

  constructor(
    private store: Store<RootStore.IState>,
    private groups: ProductgroupService,
    private prods: ProductService,
    private route: ActivatedRoute) {
  }
}
