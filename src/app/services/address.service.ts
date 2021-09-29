import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService
{
  constructor(private httpService: HttpService) { }

  getCustomerAddress(url: any)
  {
    return this.httpService.getAddress(url);
  }
}
