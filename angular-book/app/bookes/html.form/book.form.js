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
var book_1 = require('../model/book');
var BookFormComponent = (function () {
    function BookFormComponent() {
        this.images = ['jpg', 'png',
            'gif', 'jpeg'];
        this.model = new book_1.Book(18, 'IOS Swift', this.images[0], 'ios swift language');
        this.submitted = false;
        this.active = true;
    }
    BookFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Object.defineProperty(BookFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    BookFormComponent.prototype.newHero = function () {
        var _this = this;
        this.model = new book_1.Book(18, 'test', this.images[0], 'ios swift language');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    BookFormComponent = __decorate([
        core_1.Component({
            selector: 'my-book-form',
            templateUrl: 'app/bookes/html.form/book.form.html',
            styleUrls: ['app/bookes/html.form/book.form.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BookFormComponent);
    return BookFormComponent;
}());
exports.BookFormComponent = BookFormComponent;
//# sourceMappingURL=book.form.js.map