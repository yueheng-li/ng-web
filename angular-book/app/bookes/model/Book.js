"use strict";
var Book = (function () {
    function Book(_id, name, img, description, imgPath) {
        this._id = _id;
        this.name = name;
        this.img = img;
        this.description = description;
        this.imgPath = imgPath;
    }
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map