import { Component, OnInit, OnDestroy } from '@angular/core';
import { AzSecureService } from './azsecure.service';
import { IProduct } from './product.model';

@Component({
  selector: 'app-azsecure',
  templateUrl: './azsecure.component.html',
  styleUrls: ['./azsecure.component.scss']
})
export class AzSecureComponent implements OnInit, OnDestroy {

    public azProducts : Array<IProduct> = [];

    constructor(private _azSecureService : AzSecureService) {}

    ngOnInit() { 
       this._azSecureService.getProducts2016().subscribe((data) => {
        this.azProducts = data;
       });
    }
    ngOnDestroy() { 
        
    }
}


