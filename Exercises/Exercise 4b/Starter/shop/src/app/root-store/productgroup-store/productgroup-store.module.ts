import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productgroupReducer } from './productgroup.store'


// TODO: 7
// Register the productgroupReducer using StoreModule.forFeature
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductgroupStoreModule { }
