import { Component } from '@angular/core';

@Component({
  // name of the component
  selector: 'app-home',
  // Inline view
  //template: `<h1>OK</h1>`,
  // external view
  templateUrl: './home.component.html',
  // External styles
  styleUrls: ['./home.component.css']
  // Inline styles
  //styles: ['h1 {background-color:red}']
})
export class HomeComponent
{
}
