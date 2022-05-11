import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Main1Component } from './main1/main1.component';
import { Main2Component } from './main2/main2.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Main3Component } from './main3/main3.component';

//import { SubModule } from '../sub/sub.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent, Main1Component, Main2Component, NotfoundComponent, Main3Component],
  exports:[MainComponent],
  imports: [
    CommonModule,
    //SubModule,
    RouterModule
  ]
})
export class MainModule { }
