import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modelling',
  templateUrl: './modelling.component.html',
  styleUrls: ['./modelling.component.scss']
})
export class ModellingComponent implements OnInit, OnDestroy {
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