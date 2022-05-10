import { Review } from '../../entities/entities';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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

  @Input()
  public productID: number;
  @Output()
  public add: EventEmitter<Review> = new EventEmitter();

  public onSubmit() {
      this.submitted = true;
      Object.assign(this.review, this.reviewForm.value);
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
