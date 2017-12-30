import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
/*
  Generated class for the ZebPayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ZebPayProvider {

private zebPayApi='https://www.zebapi.com/api/v1/market/ticker/btc/inr';

  constructor(public http: HttpClient) {
    console.log('Hello ZebPayProvider Provider');
  }

  getRates(): Observable<any> {
  return this.http.get(this.zebPayApi).pipe(
                  map(this.extractData),
                  catchError(this.handleError));
	}

private extractData(res: Response ) {
	 console.log('ZebPayProvider extracting data');
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
