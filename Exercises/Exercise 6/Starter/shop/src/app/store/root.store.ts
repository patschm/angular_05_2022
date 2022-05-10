import { IProductgroupState } from './productgroup-store/productgroup.store';
import { IProductState } from './product-store/product.store';

export interface IState {
    productgroup:  IProductgroupState;
    product: IProductState
}

