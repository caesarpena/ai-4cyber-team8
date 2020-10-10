import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhishTankService } from './phishtank.service';
import { IPhishingInfo } from './phishing-info.model';

@Component({
  selector: 'app-phishtank',
  templateUrl: './phishtank.component.html',
  styleUrls: ['./phishtank.component.scss']
})
export class PhishTankComponent implements OnInit, OnDestroy {

    public phishInfo : Array<IPhishingInfo> = [];

    constructor(private _phishtankeService : PhishTankService) {}

    ngOnInit() { 
       this._phishtankeService.getPhishInfo().subscribe((data) => {
        this.phishInfo = data;
       });
    }
    ngOnDestroy() { 
    }
}


