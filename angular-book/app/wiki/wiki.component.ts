import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'my-wiki',
  template: `
    <h1>Wikipedia Demo</h1>
    <p><i>Fetches when typing stops</i></p>
    
    <input #term (keyup)="search(term.value)" [value]="selectItem"/>
    <div [hidden]="!selectedItem" css="position: absolute;">
    <ul class="heroes" >
      <li *ngFor="let item of items | async" 
        [class.selected] = "item === selectItem"
        (click)="onSelect(item)">
        <span class="badge">{{item}}</span>
      </li>
    </ul>
    </div>
  `,
  providers: [WikipediaService]
})
export class WikiComponent {
  items: Observable<string[]>;
  selectItem : string = "";
  selectedItem = false;
  constructor (private wikipediaService: WikipediaService) { }

  private searchTermStream = new Subject<string>();

  search(term: string) { 
    this.selectedItem = true;
    this.items = this.wikipediaService.search(term); 
  }

  onSelect(item: string): void {
    this.selectedItem = false;
    this.selectItem = item;
  }
/**
  items: Observable<string[]> = this.searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this.wikipediaService.search(term));*/


}