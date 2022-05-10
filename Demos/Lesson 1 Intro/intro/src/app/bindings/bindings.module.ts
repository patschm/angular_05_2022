import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding.component';

@NgModule({
  declarations: [BindingComponent],
  exports:[BindingComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BindingsModule { }
