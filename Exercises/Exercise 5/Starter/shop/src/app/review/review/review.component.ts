import { Review } from '../../entities/entities';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public review: Review = new Review();
  public submitted = false;

  @Input()
  public productID: number;
  @Output()
  public add: EventEmitter<Review> = new EventEmitter();

  public onSubmit() {
      this.review.productID = this.productID;
      this.add.emit(this.review);
      this.submitted = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
