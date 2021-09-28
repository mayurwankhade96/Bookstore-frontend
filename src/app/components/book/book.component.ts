import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit
{
  book: any;
  bookIntoCart = false;
  bookIntoWishlist = false;
  token: any;

  constructor(private dataService: DataService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private route: Router) { }

  ngOnInit(): void
  {
    this.dataService.receiveAllBooks.subscribe((response: any) =>
    {
      console.log(response);
      this.book = response;
    })
  }

  addToCart()
  {
    this.token = localStorage.getItem('token');

    if (this.token != null)
    {
      let requestFields = {
        bookId: this.book.bookId
      }
      console.log(requestFields);
      this.cartService.addToCart(requestFields).subscribe((response: any) => 
      {
        console.log(response);
        this.bookIntoCart = true;
      },
        error =>
        {
          console.log(error)
        });
    }
    else
    {
      this.route.navigate(['login']);
    }
  }

  addToWishlist()
  {
    this.token = localStorage.getItem('token');

    if (this.token != null)
    {
      let requestFields = {
        bookId: this.book.bookId
      }
      console.log(requestFields);
      this.wishlistService.addToWishlist(requestFields).subscribe((response: any) => 
      {
        console.log(response);
        this.bookIntoWishlist = true;
      },
        error =>
        {
          console.log(error)
        });
    }
    else
    {
      this.route.navigate(['login']);
    }
  }
}
