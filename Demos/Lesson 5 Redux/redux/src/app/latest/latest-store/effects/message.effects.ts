import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { MessageService } from '../../message.service';
import { loadedMessages, addMessage } from '../actions/message.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MessageEffects {

  loadMessages$ = createEffect(()=> this.actions$.pipe(
                      ofType(loadedMessages),
                      concatMap(()=>this.msgService.getAll().pipe(
                        map(msgs => loadedMessages({payload: msgs})))
                      )));
  saveMessage$ = createEffect(()=>this.actions$.pipe(
                      ofType(addMessage),
                      map(action=> {
                        this.msgService.saveMessage({index:0, text:action.payload});
                        return action;
                      }
                      )), 
                      {dispatch:false});
  

  constructor(private actions$: Actions, private msgService:MessageService)
  {}
}
