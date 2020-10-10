import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';

@Injectable()
export class AzSecureService {
    url: string = 'https://masterwebservice20201009044151.azurewebsites.net/'
    constructor(private http: HttpClient) {}

    getProducts2016(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.url+'api/Product2016/GetProducts');
    }
}