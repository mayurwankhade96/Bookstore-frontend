import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit
{
  wishlist: any;

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void
  {
    this.displayWishlistBooks();
  }

  displayWishlistBooks()
  {
    this.wishlistService.getWishlistBooks('Wishlists').subscribe((response: any) =>
    {
      console.log(response);
      this.wishlist = response.data;
      console.log(this.wishlist);
    })
  }

  removeFromWishlist(id: any)
  {
    this.wishlistService.removeFromWishlist(id).subscribe((response: any) =>
    {
      console.log(response);
      this.ngOnInit();
    });
  }
}
