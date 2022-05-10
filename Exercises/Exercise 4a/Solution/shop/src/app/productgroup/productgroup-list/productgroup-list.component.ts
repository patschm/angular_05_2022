import { Component, OnInit } from '@angular/core';
import { ProductGroup } from '../..//entities/entities';

// TODO: 8
// Import the ProductgroupService
import { ProductgroupService } from '../../services/productgroup.service';

@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {
  public productGroups: ProductGroup[];

  // TODO: 9
  // Inject the ProductgroupService
  constructor(private data: ProductgroupService) { }

  // TODO: 10
  // Call the productgroups() from the ProductgroupService and
  // assign the result to productGroups
  // Test the app
  ngOnInit(): void {
    this.data.productgroups()
    .subscribe(d => this.productGroups = d);
  }
}
