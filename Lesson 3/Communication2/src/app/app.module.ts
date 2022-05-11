import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterState } from './CounterService';
import { TellerComponent } from './teller/teller.component';
import { RxSampleComponent } from './rx-sample/rx-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    TellerComponent,
    RxSampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CounterState],
  bootstrap: [AppComponent]
})
export class AppModule { }
