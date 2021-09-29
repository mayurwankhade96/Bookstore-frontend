import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit
{
  cart: any;
  addresses: any;
  displayAddress = true;
  // displayButton = true;
  displayCart = true;
  // displayContinueButton = true;

  constructor(private cartService: CartService,
    private addressService: AddressService) { }

  ngOnInit(): void
  {
    this.displayCartBooks();
  }

  displayCartBooks()
  {
    this.cartService.getCartBooks('Carts').subscribe((response: any) =>
    {
      console.log(response);
      this.cart = response.data;
      console.log(this.cart);
    })
  }

  removeFromCart(id: any)
  {
    this.cartService.removeFromCart(id).subscribe((response: any) =>
    {
      console.log(response);
      this.ngOnInit();
    });
  }

  getAddress()
  {
    this.addressService.getCustomerAddress('Addresses').subscribe((response: any) =>
    {
      console.log(response);
      this.addresses = response.data;
      console.log(this.addresses);
      this.displayAddress = !this.displayAddress;
    })
  }

  submit()
  {
    this.displayCart = !this.displayCart;
  }
}
