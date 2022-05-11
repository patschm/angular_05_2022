import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ProductGroup } from 'src/app/entities/entities';

@Component({
  selector: 'app-product-group-list',
  template: `
    <div class="container">
    <div class="row">
        <div class="col-md-4" *ngFor="let productgroup of productGroups$ | async">
            <a class="card mb-4 box-shadow" role="button">
                    <img [src]="'https://angular-training.azureedge.net/' + productgroup.image"  
                    [alt]="productgroup.name" class="mx-auto card-img-top" />
                    <div class="card-body text-center">
                        <h5 class="card-title">{{productgroup.name}}</h5>
                        <a [routerLink]="['/products', productgroup.id ]" class="btn btn-primary">Products</a>
                    </div>
            </a>
        </div>
    </div>
  </div>
  `,
  styleUrls: ["product-group-list.css"]
})
export class ProductGroupListComponent implements OnInit {

  public productGroups$ : Observable<ProductGroup[]> = EMPTY;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.productGroups$ = this.http.get<ProductGroup[]>("https://localhost:5001/productgroups");
  }

}
