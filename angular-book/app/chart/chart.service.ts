import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class ChartService {
  constructor(private jsonp: Jsonp) {}

  search () {

    let wikiUrl = 'https://www.highcharts.com/samples/data/jsonp.php';

    let params = new URLSearchParams();
    params.set('filename', 'aapl-c.json'); // the user's search value
    params.set('callback', 'JSONP_CALLBACK');
    // TODO: Add error handling
    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(request => <string[]> request.json()[1]);

               
  }
}