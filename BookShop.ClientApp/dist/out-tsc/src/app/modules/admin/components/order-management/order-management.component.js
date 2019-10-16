import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OrderRequestModel } from 'src/app/models/orderModels/orderRequestModel';
import { OrderResponseModel } from 'src/app/models/orderModels/orderResponseModel';
let OrderManagementComponent = class OrderManagementComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.orderRequestModel = new OrderRequestModel();
        this.orderResponseModel = new OrderResponseModel();
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        this.orderService.getOrdersForAdmin(this.orderRequestModel).subscribe((data) => {
            this.orderResponseModel = data;
        });
    }
};
OrderManagementComponent = tslib_1.__decorate([
    Component({
        selector: 'app-order-management',
        templateUrl: './order-management.component.html',
        styleUrls: ['./order-management.component.css']
    })
], OrderManagementComponent);
export { OrderManagementComponent };
//# sourceMappingURL=order-management.component.js.map