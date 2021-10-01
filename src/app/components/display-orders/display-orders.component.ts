import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.scss']
})
export class DisplayOrdersComponent implements OnInit
{
  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void
  {
    this.displayOrders();
  }

  displayOrders()
  {
    return this.orderService.getOrders('Orders').subscribe((response: any) =>
    {
      console.log(response);
      this.orders = response.data;
      console.log(this.orders);
    })
  }
}
