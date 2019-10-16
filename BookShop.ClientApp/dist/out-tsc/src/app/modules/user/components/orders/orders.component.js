import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderResponseModel } from 'src/app/models/orderModels/orderResponseModel';
let OrdersComponent = class OrdersComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.orderResponseModel = new OrderResponseModel();
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        this.orderService.getOrdersForUser().subscribe((data) => {
            this.orderResponseModel = data;
        });
    }
};
OrdersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-orders',
        templateUrl: './orders.component.html',
        styleUrls: ['./orders.component.css'],
        providers: [OrderService]
    })
], OrdersComponent);
export { OrdersComponent };
//# sourceMappingURL=orders.component.js.map