import { Component, OnInit } from '@angular/core';
import { ProductGroup } from '../../entities/entities';
import { ProductgroupService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {

  public productGroups$: Observable<ProductGroup[]>;

  public ngOnInit() {
      this.productGroups$ = this.data.productgroups();
  }

  constructor(private data: ProductgroupService) {
  }

}
