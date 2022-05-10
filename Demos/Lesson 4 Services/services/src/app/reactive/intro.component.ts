import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject, timer, fromEvent } from 'rxjs';
import { takeUntil, throttleTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit 
{
  @ViewChild('btn1', { static: true }) private btn1: ElementRef;
  private _counter: number = 0;
  public list:string[] = [];
  private isRunning = false;
  private stopper:Subject<boolean> = new Subject();
  public timerLabel: string = "Start timer";

  public get counter() : number
  {
    return this._counter;
  }
  public set counter(val:number)
  {
    this._counter = val;
  }


  public start():void
  {
    if (!this.isRunning)
    {
      this.list = [];
      this.stopper = new Subject();
      this.timerLabel = "Stop Timer";
      timer(0, 1000)
        .pipe(takeUntil(this.stopper))
        .subscribe(p=>this.list.push("One"));
    }
    else
    {
      this.stopper.next(true);
      this.timerLabel = "Start Timer";
    }
    this.isRunning = !this.isRunning;
  }

  constructor() { }

  ngOnInit() {
    fromEvent(this.btn1.nativeElement, 'click')
      .pipe(throttleTime(1000),
            tap(x=>this.counter++))
      .subscribe();

  }
}
