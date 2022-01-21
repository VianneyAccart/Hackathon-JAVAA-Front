import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  openedNewSearchMenu: boolean;
  searchProperties: FormData | undefined;
  out: any;
  constructor(private searchService: SearchService) {
    this.openedNewSearchMenu = false;
    this.searchProperties = this.searchService.searchProperties;
  }

  ngOnInit(): void {}

  // Show / hide the new mobile search pane
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }
}
