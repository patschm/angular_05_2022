import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms.component';

@NgModule({
  declarations: [FormsComponent],
  exports:[FormsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BasicsModule { }
