import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { BookDetailComponent }   from './bookes/book.detail';
import { BookFormComponent }   from './bookes/book.form';
import { ClickMeComponent }   from './event/click-me';
import { LittleTourComponent }   from './event/little-tour';
import { WikiComponent }      from './wiki/wiki.component';
import { SimpleChartExample }   from './chart/chart';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'clickme',
    component: ClickMeComponent
  },
  {
    path: 'little',
    component: LittleTourComponent
  },
  {
    path: 'book',
    component: BookFormComponent
  },
  {
    path: 'wiki',
    component: WikiComponent
  },
  {
    path: 'chart',
    component: SimpleChartExample
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/