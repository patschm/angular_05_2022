import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-restcalls',
  templateUrl: './restcalls.component.html',
  styleUrls: ['./restcalls.component.css']
})
export class RestcallsComponent implements OnInit 
{
  public groups:any[] = [];

  constructor(private client:HttpClient) { }

  ngOnInit()
  {
    this.client.get<any[]>("http://localhost:5000/productgroups")
      .subscribe(
        data=>this.groups = data,
        respError=>console.log(respError.statusText),
        ()=> console.log("Call completed"));

    this.client.get<any[]>("http://localhost:5000/productgroups", { observe: 'response'})
      .pipe(map(resp=>{
        if (resp.ok) return resp.body;
        return [];
      }))
      .subscribe(data=>this.groups = data);

  }
}
