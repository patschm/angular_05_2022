import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IState, Message, messages, deleteMessage, addMessage  } from '../old-store';

@Component({
  selector: 'app-old-b',
  templateUrl: './old-b.component.html',
  styleUrls: ['./old-b.component.css']
})
export class OldBComponent implements OnInit, OnDestroy 
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
  }
  ngOnDestroy(): void 
  {
    this.storeSubscription.unsubscribe();
  }

  constructor(private store: Store<IState>) { }
}
