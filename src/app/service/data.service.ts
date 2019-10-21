import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  res: any;
  constructor(private http: HttpClient) { }
  getPrices() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=4c8a888efc76769c8bbd8151712ef690a287f42a146dd53bd126461be361a199')
    .pipe(map(res => this.res = res));

  }
}
