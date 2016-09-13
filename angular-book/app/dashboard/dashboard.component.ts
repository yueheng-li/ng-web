import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../bookes/model/book';
import { Bookes } from '../bookes/model/mock.bookes';
import { BookService }   from '../bookes/service/book.serevice';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bookes: Object;

  constructor(
    private router: Router
    ,private bookService: BookService) 
  {
  }

  ngOnInit(): void {
    //this.bookes = Bookes;
    //this.bookService.getBookes()
    //  .then(bookes => this.bookes = bookes);
    this.bookService.findAll().subscribe((data:any) => {
        //bookes = data;
        this.bookes = data;
        console.log('in component : ',data);
    });
    console.log(' HttpServiceComponent ngOnInit :', 'enter');
  }

  gotoDetail(book: Book): void {
    let link = ['/detail', book._id];
    console.debug("detail book id : " + book._id);
    this.router.navigate(link);
  }
}
