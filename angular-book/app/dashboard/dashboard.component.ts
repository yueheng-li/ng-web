import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../bookes/book';
import { Bookes } from '../bookes/mock.bookes';
import { BookService }   from '../bookes/book.serevice';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bookes: Book[] = [];

  constructor(
    private router: Router
    ,private bookService: BookService) 
  {
  }

  ngOnInit(): void {
    this.bookes = Bookes;
    this.bookService.getBookes()
      .then(bookes => this.bookes = bookes);
  }

  gotoDetail(book: Book): void {
    let link = ['/detail', book.id];
    this.router.navigate(link);
  }
}
