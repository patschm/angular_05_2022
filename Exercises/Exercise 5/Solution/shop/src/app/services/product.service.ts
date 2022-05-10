import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { Review, Price, Specification, Product } from '../entities/entities';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
  })
export class ProductService { //extends BaseService { DI through inheritance is broken since V8

    // Very annoying...
    protected config:IAppConfig;
    protected handleError<T>(result?: T) {
        return (error: any) : Observable<T> => {
          console.log(error);
          return of(result as T);
        }
    }

    public addReview(review: Review) {
        return this.http.post(this.config.apiEndpoint + 'products/reviews/', review)
            .pipe(catchError(this.handleError([])));
    }
    public reviews(pid: Number): Observable<Review[]> {
        return this.http.get<Review[]>(this.config.apiEndpoint + 'products/reviews/' + pid)
            .pipe(catchError(this.handleError([])));
    }
    public prices(pid: Number): Observable<Price[]> {
        return this.http.get<Price[]>(this.config.apiEndpoint+ 'products/prices/' + pid)
        .pipe(catchError(this.handleError([])));
    }
    public specifications(pid: Number): Observable<Specification[]> {
        return this.http.get<Specification[]>(this.config.apiEndpoint + 'products/specifications/' + pid)
        .pipe(catchError(this.handleError([])));
    }
    public product(pid: Number): Observable<Product> {
        return this.http.get<Product>(this.config.apiEndpoint + 'products/' + pid)
          .pipe(catchError(this.handleError(null)));
    }
    public products(pgid: Number, page: Number= 0, count: Number= 10): Observable<Product[]> {
        return this.http.get<Product[]>(this.config.apiEndpoint + 'products/all/' + pgid + '/' + page + '/' + count)
          .pipe(catchError(this.handleError([])));
    }

    constructor(@Inject(APP_CONFIG)config: IAppConfig, private http: HttpClient) {
        this.config = config;
        //super(config);
    }
}
