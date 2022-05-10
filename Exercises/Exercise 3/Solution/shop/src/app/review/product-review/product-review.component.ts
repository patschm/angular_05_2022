import { Review } from '../../entities/entities';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

// TODO: 1
// Import the Input, Output and EventEmitter
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  
  public reviewForm: FormGroup
  public review: Review = new Review();
  public submitted = false;

  
  // TODO: 2
  // Define an input field productID of type number
  @Input()
  public productID: number;
  // TODO: 3
  // Define an output field add of type EventEmitter
  @Output()
  public add: EventEmitter<Review> = new EventEmitter();

  public onSubmit() {
      this.submitted = true;
      Object.assign(this.review, this.reviewForm.value);
      // TODO: 4
      // Fire the output event.
      this.add.emit(this.review);
  }

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
