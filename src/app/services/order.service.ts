import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService
{

  constructor(private httpService: HttpService) { }

  placeOrder(data: any)
  {
    return this.httpService.placeOrder('Orders', data);
  }

  getOrders(url: any)
  {
    return this.httpService.getOrders('Orders');
  }
}
