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
var mock_bookes_1 = require('../model/mock.bookes');
var core_1 = require('@angular/core');
var api = require('../webservice.url/bookUrl');
var Rx_1 = require('rxjs/Rx');
var http_1 = require('@angular/http');
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.http = http;
    }
    BookService.prototype.findAll = function () {
        var _this = this;
        return this.http.get(api.findAll).map(function (res) {
            console.info("json : " + res._body);
            _this.data = JSON.parse(res._body);
            if (res._body)
                return JSON.parse(res._body);
            return res._body;
        });
    };
    BookService.prototype.addBook = function (data) {
        var body = JSON.stringify({ data: data });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // 跨域访问设定
        var options = new http_1.RequestOptions({ headers: headers });
        var req = this.http.post(api.addBook, body, options).toPromise();
        var error = req.then(this.extractData);
        return error.catch(this.handleError);
    };
    BookService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    BookService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    BookService.prototype.getBookes = function () {
        return Promise.resolve(mock_bookes_1.Bookes);
    };
    BookService.prototype.getBook = function (id) {
        return this.getBookes()
            .then(function (bookes) { return bookes.find(function (book) { return book._id === id; }); });
    };
    BookService.prototype.findBookById = function (id) {
        for (var i = 0, n = this.data.length; i < n; i++) {
            if (id == this.data[i]._id) {
                return this.data[i];
            }
        }
        return this.data[0];
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.serevice.js.map