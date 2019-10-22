import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderResponseModel } from 'src/app/models/orderModels/orderResponseModel';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit {
  orderResponseModel: OrderResponseModel;

  constructor(private orderService: OrderService) {
    this.orderResponseModel = new OrderResponseModel();
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrdersForUser().subscribe((data: OrderResponseModel) => {
      this.orderResponseModel = data;
    })
  }
}
