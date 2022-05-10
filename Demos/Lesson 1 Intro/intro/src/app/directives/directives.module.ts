import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics.component';
import { CustomAttributeComponent } from './custom-attribute.component';

@NgModule({
  declarations: [BasicsComponent, CustomAttributeComponent],
  exports:[BasicsComponent],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
