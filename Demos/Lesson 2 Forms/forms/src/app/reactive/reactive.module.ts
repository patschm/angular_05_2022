import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive.component';

@NgModule({
  declarations: [ReactiveComponent],
  exports: [ReactiveComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
