import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from 'src/app/entities/entities';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

// TODO: 5
// Create a ProductDetailResolver guard. It should fetch one specific Product based on a given id
// Register the resolver and use it in the product routes table
// Modify the product-detail,component.ts to use the guard there
@Injectable()
export class ProductDetailResolver implements Resolve<Product>
{
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = this.getProductId(route);
    return this.data.product(id);
  }

  private getProductId(route: ActivatedRouteSnapshot) : number
  {
    return +route.paramMap.get("id");
  }

  constructor(private data: ProductService, private router: Router) {}
}
