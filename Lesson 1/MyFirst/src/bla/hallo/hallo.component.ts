import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hallo',
  template: `
    <p>
      hallo works!
    </p>
  `,
  styles: [
  ]
})
export class HalloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
