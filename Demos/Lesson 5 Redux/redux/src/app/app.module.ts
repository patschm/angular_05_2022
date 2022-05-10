import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OldModule } from './old/old.module';
import { LatestModule } from './latest/latest.module';
import { BasicModule } from './basic/basic.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //BasicModule,
    OldModule,
    //LatestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
