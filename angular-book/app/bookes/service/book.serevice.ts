import { Book } from '../model/book';
import { Bookes } from '../model/mock.bookes';
import { Injectable } from '@angular/core';
import * as api from '../webservice.url/bookUrl';
import {Observable} from 'rxjs/Rx';

import { Http, RequestOptions, Response, Headers }from '@angular/http';

@Injectable()
export class BookService {
  data:any;
  constructor(public http:Http) {
      this.http = http;
  }

  findAll():Observable<any> {
    return this.http.get(api.findAll).map((res:any)=> {
    	  console.info("json : " + res._body);
        this.data = JSON.parse(res._body);
        if (res._body) return JSON.parse(res._body);
        return res._body;
    });
  }

  addBook(data:any) {
    let body = JSON.stringify({ data });
    let headers = new Headers({ 'Content-Type': 'application/json'});

  // 跨域访问设定
    let options = new RequestOptions({ headers: headers });
    let req = this.http.post(api.addBook, body, options).toPromise();
    let error =  req.then(this.extractData);
    return error.catch(this.handleError);
  }

 private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getBookes(): Promise<Book[]> {
    return Promise.resolve(Bookes);
  }

  getBook(id: number): Promise<Book> {
    return this.getBookes()
               .then(bookes => bookes.find(book => book._id === id));
  }

  findBookById(id: number):Book {
    for(let i = 0, n = this.data.length; i< n; i++) {
      if (id == this.data[i]._id) {
        return this.data[i];
      }
    }
    return this.data[0];
  }

}