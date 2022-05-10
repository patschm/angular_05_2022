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
      <a class="nav-item navbar-brand active">Home</a>
      <a class="nav-item navbar-brand">Product groups</a>
      <a class="nav-item navbar-brand">About</a>
  </div>
</nav>
<!--TODO: 6
  Define the router placeholder

  Test the application
-->

  `,
  styles: []
})
export class AppComponent {
  title = 'shop';
}
