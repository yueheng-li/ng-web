"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_base_controller_1 = require('../../common/controller/app.base.controller');
var book_serevice_1 = require('../service/book.serevice');
var file_upload_service_1 = require('../../common/utils/file.upload.service');
var api = require('../webservice.url/bookUrl');
var BookFormComponent = (function (_super) {
    __extends(BookFormComponent, _super);
    function BookFormComponent(router, bookService, route, uploadService) {
        _super.call(this);
        this.router = router;
        this.bookService = bookService;
        this.route = route;
        this.uploadService = uploadService;
        this.images = ['jpg', 'png',
            'gif', 'jpeg'];
        this.submitted = false;
        this.active = true;
    }
    BookFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.model.imgPath);
        this.bookService.addBook(this.model);
    };
    Object.defineProperty(BookFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    BookFormComponent.prototype.newHero = function () {
        var _this = this;
        this.model;
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    BookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.model = _this.bookService.findBookById(id);
        });
    };
    //onChange file listener
    BookFormComponent.prototype.changeListener = function (file) {
        this.postFile(file.target);
    };
    //send post file to server 
    BookFormComponent.prototype.postFile = function (inputValue) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            var file = inputValue.files[0];
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
            _this.model.imgPath = file;
            _this.uploadService.upload(api.upload, file);
        });
    };
    BookFormComponent = __decorate([
        core_1.Component({
            selector: 'my-book-form',
            templateUrl: 'app/bookes/html.form/book.form.html',
            styleUrls: ['app/bookes/html.form/book.form.css'],
            providers: [
                file_upload_service_1.FileUploadService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, book_serevice_1.BookService, router_1.ActivatedRoute, file_upload_service_1.FileUploadService])
    ], BookFormComponent);
    return BookFormComponent;
}(app_base_controller_1.BaseController));
exports.BookFormComponent = BookFormComponent;
//# sourceMappingURL=book.form.js.map