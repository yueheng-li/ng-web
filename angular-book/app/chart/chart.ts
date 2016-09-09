import { Component, OnInit }                    from '@angular/core';
import { Jsonp }       from '@angular/http';
import { CHART_DIRECTIVES, Highcharts } from 'angular2-highcharts'; 
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { ChartService } from './chart.service';

@Component({
    selector: 'my-app',
    styles: [`
      chart {
        display: block;
      }
    `],
    template: ``,
  providers: [ChartService]
})
export class SimpleChartExample implements OnInit {
  options: Observable<string[]>;
  constructor (private chartService: ChartService) { }

  private searchTermStream = new Subject<string>();

  ngOnInit(): void {
    this.options = this.chartService.search(); 
    console.dir(this.options);
  }

  search() { this.options = this.chartService.search(); }
}


