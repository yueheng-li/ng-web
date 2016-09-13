import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }        from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BookDetailComponent }   from './bookes/html.detail/book.detail';
import { BookFormComponent }   from './bookes/html.form/book.form';
import { ClickMeComponent }   from './event/click-me';
import { LittleTourComponent }   from './event/little-tour';
import { BookService }   from './bookes/service/book.serevice';
import { WikiComponent }      from './wiki/wiki.component';
import { WikipediaService} from './wiki/wikipedia.service';
import { SimpleChartExample }   from './chart/chart';



import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule
    ,routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BookDetailComponent,
    BookFormComponent,
    ClickMeComponent,
    LittleTourComponent,
    WikiComponent,
    SimpleChartExample
  ],
  providers: [
    BookService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule {
}