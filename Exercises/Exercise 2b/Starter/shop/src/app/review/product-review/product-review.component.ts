import { Review } from '../../entities/entities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  
  // TODO: 2 Declare a field reviewForm of type FormGroup
  
  public review: Review = new Review();
  public submitted = false;

  public onSubmit() {
      this.submitted = true;
      Object.assign(this.review, this.reviewForm.value);
      console.log(this.review);
  }

  // TODO: 3 Inject the FormBuilder and build the reviewForm with the fields:
  //         - score (min:0, max:5, required)
  //         - author (required)
  //         - text (required)
  constructor() { 
    
  }
  ngOnInit(): void {
  }

}
