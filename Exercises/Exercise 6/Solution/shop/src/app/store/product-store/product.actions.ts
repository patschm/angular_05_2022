import { createAction, props } from '@ngrx/store';
import { Product } from '../../entities/entities';

export enum ActionTypes 
{
    SelectProduct = "[Product] Select"
}

export const selectProduct = createAction(
  ActionTypes.SelectProduct, props<Product>()
);





