import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
private apiUrl="https://koinex.in/api/ticker";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
    //this..interval(1000);
  }
getRates(): Observable<any> {
  return this.http.get(this.apiUrl).pipe(
                  map(this.extractData),
                  catchError(this.handleError));
	}

private extractData(res: Response ) {
  let body = res;
  return body || { };
}

private handleError (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}
