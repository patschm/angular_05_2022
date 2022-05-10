import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent</h1>
    <input type="text" [(ngModel)]="data" />
    <hr />
    <h1>{{data}}</h1>
    <hr/>
    <hr/>
    <app-child [c-data]="data" (ondata)="handle($event)"></app-child>
  `,
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  public data:string = "";

  public handle(txt:string)
  {
    this.data = txt;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
