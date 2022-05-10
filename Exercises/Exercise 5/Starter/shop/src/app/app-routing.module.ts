import { NgModule } from '@angular/core';

// TODO: 1
// Import Routes and RouterModule from @angular/router
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { ProductgroupListComponent } from './productgroup/productgroup-list/productgroup-list.component';


// TODO: 2
// Create an public variable routes of type Routes
// Define the following routes:
//   home with component HomeComponent
//   productgroups with component ProductGroupListComponent
//   about with component AboutComponent
//   a redirect to home if no path was specified
//   a redirect to NotFoundComponent for illegal urls

// TODO: 12 Lazy Loading (Do not do this before TODO 7)
// Define a path products and dynamically load the ProductModule


// TODO: 3
// Register the routes table
@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
