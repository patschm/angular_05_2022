import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, concatMap, debounce, debounceTime, delay, exhaustMap, interval, map, mergeMap, Observable, of, retry, switchMap, throttleTime } from 'rxjs';
import { ProductGroup } from '../entities/entities';

@Component({
  selector: 'app-rx-sample',
  template: `
    <h1>{{teller}}</h1>
  `,
  styles: [
  ]
})
export class RxSampleComponent implements OnInit {
  private _subtel: number = 0;
  private inter$ = interval(1000).pipe(map(()=>this._subtel++));
  public teller:string = "";

  constructor(private hc:HttpClient) { }

  public doRestCall(nr:number):Observable<string>
  {
    return of("From Service: " + nr).pipe(delay(Math.random() * 5000));
  }

  ngOnInit(): void {
    this.hc.get<ProductGroup[]>("https://localhost:5001/productgroups")
      .pipe(retry(3))
      .subscribe({
        next:res=>this.teller = res[0].name, 
        error: err=>console.log(err), 
        complete: ()=>console.log("Klaar")
      })
    // this.inter$.pipe(
    //     //concatMap(nr=>this.doRestCall(nr))
    //     //mergeMap(nr=>this.doRestCall(nr))
    //     //exhaustMap(nr=>this.doRestCall(nr))
    //     switchMap(nr=>this.doRestCall(nr))
    //   ).subscribe(dt=>this.teller = dt);
    
  }

}
