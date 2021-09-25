import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService
{
  baseUrl = environment.baseUrl;
  token: any;

  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.post(this.baseUrl + url, data);
  }

  getBooks(url: any)
  {
    return this.http.get(this.baseUrl + url)
  }

  addToCart(url: any, data: any)
  {
    this.token = localStorage.getItem('token');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.post(this.baseUrl + url, data, Options);
  }
}
