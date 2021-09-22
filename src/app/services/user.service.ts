import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService
{

  constructor(private httpService: HttpService) { }

  login(data: any)
  {
    return this.httpService.Post("Customer/login", data, null, false);
  }

  signup(data: any)
  {
    return this.httpService.Post("Customer", data, null, false);
  }

  forget(data: any)
  {
    return this.httpService.Post("Customer/forgetpassword", data, null, false);
  }
}
