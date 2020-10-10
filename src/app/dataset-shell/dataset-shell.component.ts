import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dataset-shell',
  templateUrl: './dataset-shell.component.html',
  styleUrls: ['./dataset-shell.component.scss']
})
export class DatasetShellComponent implements OnInit, OnDestroy {
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