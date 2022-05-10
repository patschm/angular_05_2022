import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { ProductModule } from './product/product.module';
import { ProductgroupModule } from './productgroup/productgroup.module';
import { RootStoreModule } from './root-store/root-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { APP_CONFIG, API_CONFIG } from './app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductgroupModule,
    ProductModule,
    ServicesModule,
    NgbModule,
    RootStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [{ provide: APP_CONFIG, useValue: API_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
