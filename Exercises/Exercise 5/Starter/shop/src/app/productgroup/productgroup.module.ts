import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgroupListComponent } from './productgroup-list/productgroup-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductgroupListComponent],
  exports: [ProductgroupListComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductgroupModule { }
