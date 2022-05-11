import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, exhaustMap, map, Observable, switchMap, tap } from 'rxjs';
import { Product, ProductGroup } from 'src/app/entities/entities';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>{{productGroup?.name}}</h2>
<ul>
    <li *ngFor="let p of products$ | async">
        <a>{{p.brand.name}} {{p.name}} </a>
    </li>
</ul>
  `,
  styles: [
  ]
})
export class ProductListComponent implements OnInit {
  public products$:Observable<Product[]> = EMPTY;
  public productGroup: ProductGroup = new ProductGroup();

  constructor(private client: HttpClient, private ar:ActivatedRoute) { }

  private getGroup(pgid:number): Observable<ProductGroup>
  {
    return this.client.get<ProductGroup>("https://localhost:5001/productgroups/"+pgid);
  }
  private getProducts(pgid:number): Observable<Product[]>
  {
    return this.client.get<Product[]>("https://localhost:5001/products/all/"+pgid);
  }
  ngOnInit(): void {
    this.products$ = this.ar.params
      .pipe(
        exhaustMap((pars:any)=>this.getGroup(pars.pgid)),
        tap(pg=>this.productGroup = pg),
        exhaustMap((pg:any)=>this.getProducts(pg.id))
        );
  }

}
