import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
    }
    sendPaymentData(model) {
        return this.http.post(environment.apiUrl + 'Order/SendPaymentData', model);
    }
    getCheckout(items) {
        return this.http.post(environment.apiUrl + 'Order/GetCheckout', items);
    }
    getOrdersForUser() {
        return this.http.get(environment.apiUrl + 'Order/GetOrdersForUser');
    }
    getOrdersForAdmin(requestModel) {
        return this.http.post(environment.apiUrl + 'Order/GetOrdersForAdmin', requestModel);
    }
};
OrderService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map