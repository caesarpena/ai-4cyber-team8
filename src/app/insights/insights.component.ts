import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit, OnDestroy {
    tab: any;
    ngOnInit() { 
      this.tab = '0';
    }
    ngOnDestroy() { 
    }
    onClickTab(tabRef: number) {
      this.tab = tabRef;
    }
}