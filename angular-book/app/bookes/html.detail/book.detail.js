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
var BookDetailComponent = (function (_super) {
    __extends(BookDetailComponent, _super);
    function BookDetailComponent(router, bookService, route) {
        this.router = router;
        this.bookService = bookService;
        this.route = route;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            //this.bookService.getBook(id)
            //  .then(book => this.book = book);
            console.debug("BookDetailComponent detail book id : " + params['id']);
            _this.book = _this.bookService.findBookById(id);
        });
    };
    BookDetailComponent.prototype.goBookEdit = function (editbook) {
        console.log(editbook);
        var link = ['/book', editbook._id];
        this.router.navigate(link);
    };
    BookDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-book-detail',
            templateUrl: 'app/bookes/html.detail/book.detail.html',
            styleUrls: ['app/bookes/html.detail/book.detail.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, book_serevice_1.BookService, router_1.ActivatedRoute])
    ], BookDetailComponent);
    return BookDetailComponent;
}(app_base_controller_1.BaseController));
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book.detail.js.map