import { Component, OnInit } from '@angular/core';
import { ProductGroup } from '../..//entities/entities';
import { ProductgroupService } from '../../services/productgroup.service';
import { Observable } from 'rxjs';

import { IState } from '../../root-store/root.state';
import { Store } from '@ngrx/store';
import { selectProductgroup } from '../../root-store/productgroup-store/productgroup.actions';


@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {
  
  public productGroups$: Observable<ProductGroup[]>;

  public selectGroup($event):void
  {
    let productGroup: ProductGroup = $event;
    // TODO: 10
    // send the selected productGroup to the store
    this.store.dispatch(selectProductgroup(productGroup));
  }

  public ngOnInit() {
      this.productGroups$ = this.data.productgroups();
  }

  // TODO: 9 
  // Inject the ngrx Store for IState
  constructor(private data: ProductgroupService, private store:Store<IState>) {

  }
}
