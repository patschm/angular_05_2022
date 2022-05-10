import { createAction, props, Action } from '@ngrx/store';
import { ActionTypes } from './action.types';
import { ProductGroup } from '../../entities/entities';

// TODO: 2 
// Create a public(export) const action selectProductGroup using the createAction method
// The type should be "[ProductGroup List] Select"
// and the props<ProductGroup>
export const selectProductgroup = createAction(
  ActionTypes.SelectProductgroup, props<ProductGroup>()
);


// Old Style
// export class SelectProductGroup implements Action
// {
//     type: string = ActionTypes.SelectProductgroup;

//     constructor(public payload: ProductGroup)
//     {
//     }
// }
// export const selectProductGroup  = (productGroup) => new SelectProductGroup(productGroup);





