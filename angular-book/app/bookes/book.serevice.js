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
var mock_bookes_1 = require('./mock.bookes');
var core_1 = require('@angular/core');
var BookService = (function () {
    function BookService() {
    }
    BookService.prototype.getBookes = function () {
        return Promise.resolve(mock_bookes_1.Bookes);
    };
    BookService.prototype.getBook = function (id) {
        return this.getBookes()
            .then(function (bookes) { return bookes.find(function (book) { return book.id === id; }); });
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.serevice.js.map