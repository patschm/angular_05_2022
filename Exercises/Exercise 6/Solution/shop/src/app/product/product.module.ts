import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGeneralComponent } from './product-general/product-general.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListResolver } from './product-list/product-list.resolver';
import { ProductDetailResolver } from './product-detail/product-detail.resolver';

// TODO: 2 Register the ProductListResolver
// TODO: 7 Register the ProductDetailResolver
@NgModule({
  declarations: [ProductDetailComponent, ProductGeneralComponent, ProductListComponent, ProductPriceComponent],
  exports: [ProductDetailComponent, ProductGeneralComponent, ProductListComponent, ProductPriceComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule
  ],
  providers:[ProductListResolver, ProductDetailResolver]
})
export class ProductModule { }
