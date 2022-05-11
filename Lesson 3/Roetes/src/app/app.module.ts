import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { RouterModule, Routes } from '@angular/router';
import { Main1Component } from './main/main1/main1.component';
import { Main2Component } from './main/main2/main2.component';
import { Main3Component } from './main/main3/main3.component';
import { BlokkingGuard } from './blokking.guard';

const routes:Routes=[
  {
    path:"main1", 
    component:Main1Component
  },
  {
    path:"main2/:id",
    component:Main2Component
  },
  {
    path:"main3",
    component:Main3Component,
    canActivate: [BlokkingGuard]
  },
  {
    path:"sub",
    loadChildren:()=>import("./sub/sub.module").then(m=>m.SubModule)
  },
  {
    path:"",
    redirectTo:"/main1",
    pathMatch:"full"
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    RouterModule.forRoot(routes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
