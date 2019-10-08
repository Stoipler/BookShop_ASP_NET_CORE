import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { UserOrdersModel } from 'src/app/models/userOrdersModel';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit {
  userOrders: UserOrdersModel = new UserOrdersModel();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrdersForUser().subscribe((data: UserOrdersModel) => {
      this.userOrders = data;
    })
  }
}
