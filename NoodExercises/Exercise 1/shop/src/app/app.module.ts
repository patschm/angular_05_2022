import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductgroupModule } from './productgroup/productgroup.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// TODO: 4
// Import the ProductgroupModule in AppModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductgroupModule
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
