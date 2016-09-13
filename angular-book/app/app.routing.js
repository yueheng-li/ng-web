"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var book_detail_1 = require('./bookes/html.detail/book.detail');
var book_form_1 = require('./bookes/html.form/book.form');
var click_me_1 = require('./event/click-me');
var little_tour_1 = require('./event/little-tour');
var wiki_component_1 = require('./wiki/wiki.component');
var chart_1 = require('./chart/chart');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'clickme',
        component: click_me_1.ClickMeComponent
    },
    {
        path: 'little',
        component: little_tour_1.LittleTourComponent
    },
    {
        path: 'book',
        component: book_form_1.BookFormComponent
    },
    {
        path: 'wiki',
        component: wiki_component_1.WikiComponent
    },
    {
        path: 'chart',
        component: chart_1.SimpleChartExample
    },
    {
        path: 'detail/:id',
        component: book_detail_1.BookDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map