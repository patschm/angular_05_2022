import { Component, OnInit } from '@angular/core';
import { Review } from '../../entities/entities';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  public review: Review = new Review();
  public submitted = false;

  public onSubmit() {
      this.submitted = true;
      console.log(this.review);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
