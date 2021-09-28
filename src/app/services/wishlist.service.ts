import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService
{

  constructor(private httpService: HttpService) { }

  addToWishlist(data: any)
  {
    return this.httpService.addTowishlist('Wishlists', data);
  }

  removeFromWishlist(data: any)
  {
    return this.httpService.removeFromWishlist(data);
  }

  getWishlistBooks(url: any)
  {
    return this.httpService.getWishlistBooks('Wishlists');
  }
}
