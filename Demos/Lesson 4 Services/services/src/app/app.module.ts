import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { ReactiveModule } from './reactive/reactive.module';
import { RestModule } from './rest/rest.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    ReactiveModule,
    RestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
