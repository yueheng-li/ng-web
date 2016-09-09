import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Book } from './book';
import { Bookes } from './mock.bookes';
import { BookService }   from './book.serevice';

@Component({
  selector: 'my-book-detail',
  templateUrl: 'app/bookes/book.detail.html',
  styleUrls: ['app/bookes/book.detail.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.bookService.getBook(id)
        .then(book => this.book = book);
    });
  }

  goBack(): void {
    window.history.back();
  }
}