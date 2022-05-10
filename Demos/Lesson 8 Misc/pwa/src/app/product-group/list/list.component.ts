import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public productGroups:any[];

  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.client.get<any>("http://localhost:5000/productgroups")
      .subscribe(data=>{
          this.productGroups = data;
        });
  }

}
