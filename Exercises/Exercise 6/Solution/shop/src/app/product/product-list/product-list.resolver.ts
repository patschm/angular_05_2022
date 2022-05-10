import { Product } from '../../entities/entities';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../services';


// TODO: 1
// First start the application and navigate to a productgroup and from there to a product
// Not the specifications (or prices) are empty the first time.
// That's what we're cong to solve
//
// The productListResolver is a guard that stops the loading until the service call finishes.
// If it's not used the page will probably show an empty list of product
// Complete the ProductListResolver by implementing the right interface
// Decorate it with the right decorator and register the service in the module.
@Injectable({
  providedIn: 'root'
})
export class ProductListResolver implements  Resolve<Product[]> {

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]>
  {
    return this.loadData(route);
  }

  private loadData(route: ActivatedRouteSnapshot)
  {
    const id = +route.paramMap.get('pgid');
    return this.data.products(id, 0, 10);
  }
  constructor(private data: ProductService, private router: Router) {}
  
}
