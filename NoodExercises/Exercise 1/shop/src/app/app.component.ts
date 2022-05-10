import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-productgroup-list></app-productgroup-list>
    
    <!--TODO: 5
      Use the ProductGroupListComponent here

      Test the application (ng serve --open)
    -->
  `,
  styles: []
})
export class AppComponent {
  title = 'shop';
}
