import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import { IState, Message, messages, deleteMessage, addMessage, loadedMessages  } from '../old-store';

@Component({
  selector: 'app-old-a',
  templateUrl: './old-a.component.html',
  styleUrls: ['./old-a.component.css']
})
export class OldAComponent implements OnInit, OnDestroy 
{
  private storeSubscription: Subscription;
  public messages: Message[] = [];
  public text:string;
  
  public onDelete(idx) : void
  {
    this.store.dispatch(deleteMessage(idx));
  }
  public onSend() : void
  {
    this.store.dispatch(addMessage(this.text));
  }
  
  ngOnInit() 
  {
    this.storeSubscription = this.store.select(messages).subscribe(msgs=>this.messages = msgs);
    // Without effcets
    this.msgService.getAll().subscribe(res=>{
        this.store.dispatch(loadedMessages(res));
    });
    // With Effects
   // this.store.dispatch(loadedMessages(null));
  }
  ngOnDestroy(): void 
  {
    this.storeSubscription.unsubscribe();
  }

  constructor(private store:Store<IState>, private msgService: MessageService) { }
}
