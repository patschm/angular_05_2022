import { Review } from '../../entities/entities';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  
  // TODO: 2 Declare a field reviewForm of type FormGroup
  public reviewForm: FormGroup
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
  constructor(private builder: FormBuilder) { 
    this.reviewForm = this.builder.group({
      "score": ["", [Validators.min(0), Validators.max(5), Validators.required]],
      "author": ["", [Validators.required]],
      "text": ["", [Validators.required]]
    });
    
  }
  ngOnInit(): void {
  }

}
