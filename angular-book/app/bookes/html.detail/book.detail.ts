import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BaseController }   from '../../common/controller/app.base.controller';

import { Book } from '../model/book';
import { Bookes } from '../model/mock.bookes';
import { BookService }   from '../service/book.serevice';

@Component({
  selector: 'my-book-detail',
  templateUrl: 'app/bookes/html.detail/book.detail.html',
  styleUrls: ['app/bookes/html.detail/book.detail.css']
})
export class BookDetailComponent implements OnInit extends BaseController {
  book: Book;

  constructor(
    private router: Router,
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

  goBookEdit(editbook:Book): void {
    console.log(editbook);
    let link = ['/book', editbook._id];
    this.router.navigate(link);
  }
}