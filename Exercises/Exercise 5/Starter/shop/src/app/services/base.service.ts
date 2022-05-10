import { Observable, of } from 'rxjs';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { Inject } from '@angular/core';

export class BaseService {
    protected config:IAppConfig;

    constructor(config: IAppConfig) {
        this.config = config;
    }

    protected handleError<T>(result?: T) {
        return (error: any) : Observable<T> => {
          console.log(error);
          return of(result as T);
        }
    }
}
