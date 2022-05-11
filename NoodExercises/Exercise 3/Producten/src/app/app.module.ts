import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductGroupListComponent } from './product-group/product-group-list/product-group-list.component';
import { ProductGroupModule } from './product-group/product-group.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {
    path:"groups",
    component: ProductGroupListComponent
  },
  {
    path:"products/:pgid",
    component:ProductListComponent
  },
  {
    path:"",
    redirectTo:"/groups",
    pathMatch:"full"
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductGroupModule,
    ProductModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
