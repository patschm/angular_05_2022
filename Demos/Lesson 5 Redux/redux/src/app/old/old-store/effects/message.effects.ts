import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MessageService } from '../../message.service';
import { MessageActionTypes, AddMessage } from '../actions/message.actions';
import { mergeMap, map, mergeAll, concatMap } from 'rxjs/operators';



@Injectable()
export class MessageEffects {

  @Effect()
  loadMessages$ = this.actions$
                    .pipe(
                      ofType(MessageActionTypes.LoadedMessages),
                      concatMap(()=>this.msgService.getAll()
                        .pipe(map(msgs=>({ type:MessageActionTypes.LoadedMessages, payload:msgs})))
                        )
                      );
  @Effect({dispatch:false})
  saveMessage$ = this.actions$
                    .pipe(
                      ofType(MessageActionTypes.AddMessage),
                      map((action:AddMessage)=>{
                        this.msgService.saveMessage({index:0, text:action.payload.text});
                        return null; 
                      })
                      );
  

  constructor(private actions$: Actions, private msgService:MessageService)
  {}

}
