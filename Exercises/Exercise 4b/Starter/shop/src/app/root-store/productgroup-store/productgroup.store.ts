import { Action, createReducer, on } from '@ngrx/store';
import { ProductGroup } from '../../entities/entities';
import { ActionTypes } from './action.types';

// TODO: 3
// Create a public(export) interface IProductgroupState with field currentProductgroup of type ProductGroup


// TODO: 4
// Create a public const  productgroupSelect
// assign it a function which accept an arument state of type IState (TODO 1) and returns the productgroup field
// Selectors are convenient for avoiding complicated lambda's in code
// They give you access to a certain element in the state tree


// TODO: 5
// Create a public const initState of type IProductgroupState
// assign it an object which sets the properties id=0, name="" and image=""
export const initialState=null;

// TODO: 6
  // Define a handler for selectProductgroup action (on())
  // assign i a function (labmda) with arguments state and action and let it return
  // a new IProductgroupState object with currentProductgroup = action
export const productgroupReducer = createReducer(
  initialState,
  
);
