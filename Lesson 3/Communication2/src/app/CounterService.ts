import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";


@Injectable({providedIn:"root"})
export class CounterState {
    private _counter:Subject<number> = new BehaviorSubject(0);

    public set Counter(ct:number)
    {
        //this._counter = ct;
        this._counter.next(ct);
    }
    public get Counter$() : Observable<number>
    {
        return this._counter;
    }

}