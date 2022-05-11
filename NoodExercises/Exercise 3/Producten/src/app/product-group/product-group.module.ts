import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGroupListComponent } from './product-group-list/product-group-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductGroupListComponent
  ],
  exports:[ProductGroupListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductGroupModule { }
