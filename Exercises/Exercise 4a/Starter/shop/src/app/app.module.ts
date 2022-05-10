import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_CONFIG, API_CONFIG} from './app.config';
import { ProductgroupModule } from './productgroup/productgroup.module';
import { ReviewModule } from './review/review.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// TODO: 7
// Import the HttpClientModule (from @angular/common/http)
// Import the ServicesModule
// Register them in AppModule


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReviewModule,
    ProductgroupModule,
    NgbModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: API_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
