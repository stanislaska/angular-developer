'use strict';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { environment } from '../../environments/environment';

const options = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ProductService {
  /**
   * Default http client injectable constructor
   * @param {HttpClient} client the qualified given http client.
   */
  constructor(private client: HttpClient) {
    // - Nop
  }

  private handle<T> (operation = 'undefined', result?: T) {
    return (error: any): Observable<T> => {
      return Observable.of(result as T);
    };
  }

  private normalize(res: Response) {
    return res || {};
  }

  add (product): Observable<any> {
    return this.client.post<any>(environment.endpoint + '' + environment.v1.products.uri, JSON.stringify(product)
      , options)
        .pipe(tap(product => console.log(JSON.stringify(product, null, 2))),
          catchError(this.handle<any>('add'))
      );
  }

  update (id, product): Observable<any> {
    return this.client.put(environment.endpoint + '' + environment.v1.products.uri + '/' + id
      , JSON.stringify(product), options).pipe(
        tap(_ => console.log(JSON.stringify(product, null, 2))),
        catchError(this.handle<any>('update'))
      );
  }

  delete (id): Observable<any> {
    return this.client.delete<any>(environment.endpoint + '' + environment.v1.products.uri + '/' + id, options)
      .pipe(
        tap(_ => console.log('Deleting resouce: %s', id)),
        catchError(this.handle<any>('delete'))
    );
  }

  loadAll(): Observable<any> {
    return this.client.get(environment.endpoint + '' + environment.v1.products.uri)
      /*.pipe(
        tap((product) => console.log(JSON.stringify(product, null, 2))),
        catchError(this.handle<any>('all'))
        // map(this.normalize)
      );*/
      .pipe(map(this.normalize));
  }

  load(id): Observable<any> {
    return this.client.get(environment.endpoint + '' + environment.v1.products.uri + '/' + id)
      .pipe(map(this.normalize));
  }
}
