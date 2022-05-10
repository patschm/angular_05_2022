import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from './store';
import { ServicesModule } from './services';
import { APP_CONFIG, API_CONFIG } from './app.config';
import { ProductgroupModule } from './productgroup/productgroup.module';
import { MiscModule } from './misc/misc.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReviewModule } from './review/review.module';
//import { ProductModule } from './product/product.module';

// TODO: 4
// Import AppRoutingModule

// TODO: 11 Lazy Loading (Do not do this before TODO 7)
    // Remove ProductModule (also the import above)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //ProductModule,
    ProductgroupModule,
    MiscModule,
    AboutModule,
    HomeModule,
    ReviewModule,
    BrowserModule,
    ServicesModule,
    AppRoutingModule,
    RootStoreModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgbModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: API_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
