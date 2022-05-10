import { createReducer, on } from "@ngrx/store";
import { initialState } from "./product.store";
import { selectProduct } from "./product.actions";


export const productReducer = createReducer(
    initialState,
    on(selectProduct, (state, action)=>({currentProduct:action}))
  );
  