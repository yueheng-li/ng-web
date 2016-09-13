"use strict";
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
var book_serevice_1 = require('../bookes/service/book.serevice');
var DashboardComponent = (function () {
    function DashboardComponent(router, bookService) {
        this.router = router;
        this.bookService = bookService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.bookes = Bookes;
        //this.bookService.getBookes()
        //  .then(bookes => this.bookes = bookes);
        this.bookService.findAll().subscribe(function (data) {
            //bookes = data;
            _this.bookes = data;
            console.log('in component : ', data);
        });
        console.log(' HttpServiceComponent ngOnInit :', 'enter');
    };
    DashboardComponent.prototype.gotoDetail = function (book) {
        var link = ['/detail', book._id];
        console.debug("detail book id : " + book._id);
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, book_serevice_1.BookService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map