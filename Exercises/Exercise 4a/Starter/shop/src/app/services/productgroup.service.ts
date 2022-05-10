import { ProductGroup } from '../entities/entities';
import { APP_CONFIG, AppConfig } from '../app.config';

// TODO: 1
// import the following components
//  - Injectable (from @angular/core)
//  - HttpClient (from @angular/common/http)
//  - retry, catchError (from rxjs/operators)
import { Inject } from '@angular/core';
import { Observable, of } from 'rxjs';


// TODO: 2
// Make this class a service
export class ProductgroupService {

  protected handleError<T>(result?: T) {
    return (error: any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  // TODO: 4
  // Make this method return an Observable object for ProductGroup[]
  public productgroups()
   {
    // TODO: 5
    // Retrieve the productgroups from http://localhost:5000/productgroups
    // retry 3 times and handle errors (handleError Method)
    // and return the observable
    
  }
  // TODO: 3
  // Inject the HttpClient service here
  constructor(@Inject(APP_CONFIG)private config: AppConfig) {
  }
}
