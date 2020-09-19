import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tab: any;
  constructor() { }

  ngOnInit() {
    this.tab = '0';
  }

  onClickTab(tabRef: number) {
    this.tab = tabRef;
  }
}
