import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LatestAComponent } from './latest-a/latest-a.component';
import { LatestBComponent } from './latest-b/latest-b.component';
import { LatestComponent } from './latest.component';
import { MessageService } from './message.service';
import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '../latest/latest-store';
import { EffectsModule } from '@ngrx/effects';
import { MessageEffects } from '../latest/latest-store/effects/message.effects'

@NgModule({
  declarations: [LatestComponent, LatestAComponent, LatestBComponent],
  exports:[LatestComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([MessageEffects])
  ],
  providers:[MessageService, MessageEffects]
})
export class LatestModule { }
