import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Book } from '../model/book';
import { Bookes } from '../model/mock.bookes';
import { BookService }   from '../service/book.serevice';

@Component({
  selector: 'my-book-detail',
  templateUrl: 'app/bookes/html.detail/book.detail.html',
  styleUrls: ['app/bookes/html.detail/book.detail.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      //this.bookService.getBook(id)
      //  .then(book => this.book = book);
      console.debug("BookDetailComponent detail book id : " + params['id']);
      this.book = this.bookService.findBookById(id);
    });
  }

  goBack(): void {
    window.history.back();
  }
}