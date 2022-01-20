import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {

  openedNewSearchMenu: boolean;

  constructor() {
    this.openedNewSearchMenu = false;
  }

  ngOnInit(): void {}

  // Show / hide the new mobile search pane
  openNewSearchMenu() {
    this.openedNewSearchMenu = !this.openedNewSearchMenu;
  }
}
