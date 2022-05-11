import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { CounterState } from '../CounterService';

@Component({
  selector: 'app-teller',
  template: `
   <!-- <h1>{{counter}}</h1> -->
   <h1>{{ cntSvc.Counter$ | async}}</h1>
   <hr/>
   <button (click)="increment()">Increment</button>
  `,
  styles: [  ],
  providers:[]
})
export class TellerComponent implements OnInit, OnDestroy {

  public counter:number = 0;
  private sub?: Subscription;

  public increment()
  {
    this.counter++;
    this.cntSvc.Counter = this.counter;
  }

  constructor(public cntSvc: CounterState) { }
  ngOnDestroy(): void {
    //this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    //setInterval(()=>{this.counter = this.cntSvc.Counter}, 500);
    //this.sub = this.cntSvc.Counter$.subscribe(nr => this.counter = nr);
  }

}
