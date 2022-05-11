import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  exports:[ProductListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductModule { }
