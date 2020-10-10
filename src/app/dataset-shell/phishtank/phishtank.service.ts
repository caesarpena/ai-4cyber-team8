import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhishingInfo } from './phishing-info.model';

@Injectable()
export class PhishTankService {
    url: string = 'https://masterwebservice20201009044151.azurewebsites.net/'
    constructor(private http: HttpClient) {}

    getPhishInfo(): Observable<IPhishingInfo[]> {
        return this.http.get<IPhishingInfo[]>(this.url+'api/PhishTank/GetInfo');
    }
}