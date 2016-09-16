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
var Subject_1 = require('rxjs/Subject');
var wikipedia_service_1 = require('./wikipedia.service');
var WikiComponent = (function () {
    function WikiComponent(wikipediaService) {
        this.wikipediaService = wikipediaService;
        this.selectItem = "";
        this.selectedItem = false;
        this.searchTermStream = new Subject_1.Subject();
    }
    WikiComponent.prototype.search = function (term) {
        this.selectedItem = true;
        this.items = this.wikipediaService.search(term);
    };
    WikiComponent.prototype.onSelect = function (item) {
        this.selectedItem = false;
        this.selectItem = item;
    };
    WikiComponent = __decorate([
        core_1.Component({
            selector: 'my-wiki',
            template: "\n    <h1>Wikipedia Demo</h1>\n    <p><i>Fetches when typing stops</i></p>\n    \n    <input #term (keyup)=\"search(term.value)\" [value]=\"selectItem\"/>\n    <div [hidden]=\"!selectedItem\" css=\"position: absolute;\">\n    <ul class=\"heroes\" >\n      <li *ngFor=\"let item of items | async\" \n        [class.selected] = \"item === selectItem\"\n        (click)=\"onSelect(item)\">\n        <span class=\"badge\">{{item}}</span>\n      </li>\n    </ul>\n    </div>\n  ",
            providers: [wikipedia_service_1.WikipediaService]
        }), 
        __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
    ], WikiComponent);
    return WikiComponent;
}());
exports.WikiComponent = WikiComponent;
//# sourceMappingURL=wiki.component.js.map