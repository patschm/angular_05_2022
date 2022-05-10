import { Component, OnInit } from '@angular/core';
import { ProductGroup } from '../..//entities/entities';
import { ProductgroupService } from '../../services/productgroup.service';
import { Observable } from 'rxjs';



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
    
  }

  public ngOnInit() {
      this.productGroups$ = this.data.productgroups();
  }

  // TODO: 9 
  // Inject the ngrx Store for IState
  constructor(private data: ProductgroupService) {

  }
}
