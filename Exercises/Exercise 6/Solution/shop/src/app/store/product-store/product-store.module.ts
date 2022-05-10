import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './product.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("product", productReducer)
    //EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductStoreModule { }
