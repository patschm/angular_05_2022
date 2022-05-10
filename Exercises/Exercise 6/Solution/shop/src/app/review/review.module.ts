import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReviewListComponent, ReviewComponent],
  exports: [ReviewListComponent, ReviewComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ReviewModule { }
