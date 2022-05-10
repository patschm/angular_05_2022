import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-inverse bg-inverse">
  <div class="nav">
      <a class="nav-item navbar-brand active" routerLink="/home" routerLinkActive="active">Home</a>
      <a class="nav-item navbar-brand" routerLink="/productgroups" routerLinkActive="active">Product groups</a>
      <a class="nav-item navbar-brand" routerLink="/about" routerLinkActive="active">About</a>
  </div>
</nav>
<router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'shop';
}
