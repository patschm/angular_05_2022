import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<nav class="navbar navbar-inverse bg-inverse">
  <div class="nav">
      <!--TODO: 5
          assign the home, productgroups and about routes to the links.
          Assign the active style to the class when the route is active
      -->
      <a class="nav-item navbar-brand active" routerLink="/home" routerLinkActive="active">Home</a>
      <a class="nav-item navbar-brand" routerLink="/productgroups" routerLinkActive="active">Product groups</a>
      <a class="nav-item navbar-brand" routerLink="/about" routerLinkActive="active">About</a>
  </div>
</nav>
<!--TODO: 6
  Define the router placeholder

  Test the application
-->
<router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'shop';
}
