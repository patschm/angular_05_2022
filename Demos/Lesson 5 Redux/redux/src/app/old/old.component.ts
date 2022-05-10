import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-old',
  template: `
     <app-old-a></app-old-a>
    <hr/>
    <app-old-b></app-old-b>
  `,
  styles: [
  ]
})
export class OldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
