import { ProductGroup } from '../../entities/entities';

export interface IProductgroupState {
    currentProductgroup: ProductGroup;
}

export const initialState: IProductgroupState = {
    currentProductgroup: { id:0, name:'', image:'' }
}


