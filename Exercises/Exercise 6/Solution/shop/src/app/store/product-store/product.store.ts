import { Product } from '../../entities/entities';

export interface IProductState {
  currentProduct: Product
}

export const initialState: IProductState = {
  currentProduct: null
}


