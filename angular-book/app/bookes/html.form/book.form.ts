import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BaseController }   from '../../common/controller/app.base.controller';

import { Book } from '../model/book';
import { Bookes } from '../model/mock.bookes';
import { BookService }   from '../service/book.serevice';

import { Book }    from '../model/book';

@Component({
  selector: 'my-book-form',
  templateUrl: 'app/bookes/html.form/book.form.html',
  styleUrls: ['app/bookes/html.form/book.form.css']
})
export class BookFormComponent implements OnInit extends BaseController{


  constructor(
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute) {
  }

  images = ['jpg', 'png',
            'gif', 'jpeg'];

  model : Book;

  submitted = false;


  onSubmit() { 
  	this.submitted = true; 
    console.log(this.model);
    this.bookService.addBook(this.model); 

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  active = true;

  newHero() {
    this.model = new Book();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];

      this.model = this.bookService.findBookById(id);
    });
  }
}