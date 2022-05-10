import { createReducer, on } from "@ngrx/store";
import { initialState } from './productgroup.store';
import { selectProductgroup } from "./productgroup.actions";

export const productgroupReducer = createReducer(
    initialState,
    on(selectProductgroup, (state, action)=>({currentProductgroup:action}))
  );