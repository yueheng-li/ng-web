import { Book } from '../model/book';
import { Bookes } from '../model/mock.bookes';
import { Injectable } from '@angular/core';
import * as api from '../webservice.url/bookUrl';
import {Observable} from 'rxjs/Rx';

import { Http }from '@angular/http';

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