import { createAction, props } from '@ngrx/store';
import { ProductGroup } from '../../entities/entities';

export enum ActionTypes 
{
    SelectProductgroup = "[Productgroup List] Select",
}

export const selectProductgroup = createAction(
  ActionTypes.SelectProductgroup, props<ProductGroup>()
);





