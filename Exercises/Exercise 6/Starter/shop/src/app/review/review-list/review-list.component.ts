const data = [{productID: 1, score: 5, author: 'Jan Keizer', text: 'This product is great!!!!'},
    {productID: 1, score: 3, author: 'Petra Conner', text: 'Product is meh!'}];
    
import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/entities/entities';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  public reviews: Review[] = data;
  public productID = 1;

  public onAdd(review: Review) {
      this.reviews.push(review);
  }

  constructor() { }

  ngOnInit() {
  }

}
