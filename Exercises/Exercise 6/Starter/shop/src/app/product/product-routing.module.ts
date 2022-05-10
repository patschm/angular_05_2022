import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGeneralComponent } from './product-general/product-general.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ReviewListComponent } from '../review/review-list/review-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

// TODO: 3
// Use the ProductListResolver in the route ':pgid'

// TODO: 8
// Use the ProductDetailResolver in the route 'product/:id'
// Test the application
const routes: Routes = [
  {path: ':pgid', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent, children: [
      {path: 'general', component: ProductGeneralComponent},
      {path: 'prices', component: ProductPriceComponent},
      {path: 'reviews', component: ReviewListComponent},
      {path: '', redirectTo: 'general', pathMatch: 'full'}]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
