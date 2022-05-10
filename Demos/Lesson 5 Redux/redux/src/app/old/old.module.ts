import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OldComponent } from './old.component';
import { OldAComponent } from './old-a/old-a.component';
import { OldBComponent } from './old-b/old-b.component';
import { MessageService } from './message.service';
import { environment } from 'src/environments/environment';
import { MessageEffects } from './old-store/effects/message.effects';
import { reducers } from './old-store';

//npm install @ngrx/store --save
import { StoreModule } from '@ngrx/store';
// npm install @ngrx/store-devtools --save
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// npm install @ngrx/effects --save
import { EffectsModule } from '@ngrx/effects';
// Recommended: npm install @ngrx/schematics --save-dev


@NgModule({
  declarations: [OldComponent, OldAComponent, OldBComponent],
  exports: [OldComponent],
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
  providers:[MessageService]
})
export class OldModule { }
