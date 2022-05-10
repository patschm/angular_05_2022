import { Action } from '@ngrx/store';
import { Message } from './message.model';

// enum to avoid typos in Action type names. The name itself has no special meaning
// It describes the context of the action and the action itself but anything can be used here.
export enum MessageActionTypes {
  AddMessage = '[Message] Add Message',
  DeleteMessage = '[Message] Delete Message',
  LoadedMessages = '[Message] Loaded Message'
}

// Action
// type is mandatory
// any field can be added here
export class AddMessage implements Action {
  private static messageCounter: number = 2;
  readonly type = MessageActionTypes.AddMessage
  
  constructor(public payload:Message)
  {
    this.payload.index = ++AddMessage.messageCounter;
  }
}

export class DeleteMessage implements Action {
  readonly type = MessageActionTypes.DeleteMessage;
  
  constructor(public payload:Message)
  {
  }
}

export class LoadedMessages implements Action {
  readonly type = MessageActionTypes.LoadedMessages;
  constructor(public payload:Message[])
  {
  }
}

// Action creator. Just a helper to create actions 
export const addMessage = (text:string) => new AddMessage({index:0, text:text});
export const deleteMessage = (index:number) => new DeleteMessage({index:index, text:null});
export const loadedMessages = (msgs:Message[]) => new LoadedMessages(msgs);

export type MessageAction = AddMessage | DeleteMessage | LoadedMessages;
