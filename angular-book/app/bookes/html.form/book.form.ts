import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BaseController }   from '../../common/controller/app.base.controller';

import { Book } from '../model/book';
import { BookService }   from '../service/book.serevice';
import { FileUploadService }   from '../../common/utils/file.upload.service';
import * as api from '../webservice.url/bookUrl';

@Component({
  selector: 'my-book-form',
  templateUrl: 'app/bookes/html.form/book.form.html',
  styleUrls: ['app/bookes/html.form/book.form.css']
  ,
  providers: [
    FileUploadService
  ]
})
export class BookFormComponent extends BaseController implements OnInit {


  constructor(
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute,
    private uploadService:FileUploadService) {
    super();
  }

  images = ['jpg', 'png',
            'gif', 'jpeg'];

  model : Book;

  submitted = false;


  onSubmit() { 
  	this.submitted = true; 
    console.log(this.model.imgPath);
    this.bookService.addBook(this.model); 

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  active = true;

  newHero() {
    this.model ;
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];

      this.model = this.bookService.findBookById(id);
    });
  }

    //onChange file listener
    changeListener(file:any): void {
        this.postFile(file.target);
    }


    //send post file to server 
    postFile(inputValue: any): Promise<any> {
        return new Promise((resolve, reject) => {
          var formData = new FormData();
          let xhr: XMLHttpRequest = new XMLHttpRequest();
          let file = inputValue.files[0];
          formData.append("name", file.name);
          formData.append("file", file);
          /*let reader = new FileReader();
          reader.readAsDataURL(file);
          let fileData;
          reader.onload = function(event) {
            fileData = event.target.result;
          }
          if (fileData && fileData != '') {

          }*/
          this.model.imgPath = file;
          this.uploadService.upload(api.upload, file);

        });
    }
}