import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { DutchPipe } from './dutch.pipe';

@NgModule({
  declarations: [PipesComponent, DutchPipe],
  exports:[PipesComponent],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
