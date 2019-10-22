import { Component, OnInit } from '@angular/core';
import { OrderRequestModel } from 'src/app/models/orderModels/orderRequestModel';
import { OrderResponseModel } from 'src/app/models/orderModels/orderResponseModel';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  public orderRequestModel: OrderRequestModel;
  public orderResponseModel: OrderResponseModel;

  constructor(private orderService: OrderService) {
    this.orderRequestModel = new OrderRequestModel();
    this.orderResponseModel = new OrderResponseModel();
  }

  ngOnInit() {
    this.getOrders();
  }

  public getOrders() {
    this.orderService.getOrdersForAdmin(this.orderRequestModel).subscribe(
      (data: OrderResponseModel) => {
        this.orderResponseModel = data;
      }
    );
  }
}
