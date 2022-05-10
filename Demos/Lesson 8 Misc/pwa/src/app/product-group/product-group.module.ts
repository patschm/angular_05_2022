import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent],
  exports: [ ListComponent ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ProductGroupModule { }
