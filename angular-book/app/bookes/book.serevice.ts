import { Book } from './book';
import { Bookes } from './mock.bookes';
import { Injectable } from '@angular/core';

@Injectable()
export class BookService {
  getBookes(): Promise<Book[]> {
    return Promise.resolve(Bookes);
  }

  getBook(id: number): Promise<Book> {
    return this.getBookes()
               .then(bookes => bookes.find(book => book.id === id));
  }
}