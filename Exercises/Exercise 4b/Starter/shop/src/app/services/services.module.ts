import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductgroupService } from './productgroup.service';
import { ProductService } from './product.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ProductgroupService, ProductService]
})
export class ServicesModule { }
