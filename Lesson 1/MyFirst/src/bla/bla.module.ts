import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalloComponent } from './hallo/hallo.component';
import { Hallo2Component } from './hallo2/hallo2.component';



@NgModule({
  declarations: [
    HalloComponent,
    Hallo2Component
  ],
  exports: [
    HalloComponent,
    Hallo2Component
  ],
  imports: [
    CommonModule
  ]
})
export class BlaModule { }
