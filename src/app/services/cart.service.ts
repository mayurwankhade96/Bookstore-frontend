import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService
{

  constructor(private httpService: HttpService) { }

  addToCart(data: any)
  {
    return this.httpService.addToCart('Carts', data);
  }
}
