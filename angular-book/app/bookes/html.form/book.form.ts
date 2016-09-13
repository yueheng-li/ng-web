import { Component } from '@angular/core';

import { Book }    from '../model/book';

@Component({
  selector: 'my-book-form',
  templateUrl: 'app/bookes/html.form/book.form.html',
  styleUrls: ['app/bookes/html.form/book.form.css']
})
export class BookFormComponent {

  images = ['jpg', 'png',
            'gif', 'jpeg'];

  model = new Book(18, 'IOS Swift', this.images[0], 'ios swift language');

  submitted = false;

  onSubmit() { 
  	this.submitted = true; 
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


  active = true;

  newHero() {
    this.model = new Book(18, 'test', this.images[0], 'ios swift language');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}