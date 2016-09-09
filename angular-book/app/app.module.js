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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var book_detail_1 = require('./bookes/book.detail');
var book_form_1 = require('./bookes/book.form');
var click_me_1 = require('./event/click-me');
var little_tour_1 = require('./event/little-tour');
var book_serevice_1 = require('./bookes/book.serevice');
var wiki_component_1 = require('./wiki/wiki.component');
var chart_1 = require('./chart/chart');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                book_detail_1.BookDetailComponent,
                book_form_1.BookFormComponent,
                click_me_1.ClickMeComponent,
                little_tour_1.LittleTourComponent,
                wiki_component_1.WikiComponent,
                chart_1.SimpleChartExample
            ],
            providers: [
                book_serevice_1.BookService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map