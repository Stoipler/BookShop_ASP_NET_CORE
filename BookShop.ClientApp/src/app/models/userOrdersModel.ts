import { OrderModel } from 'src/app/models/orderModel';

export class UserOrdersModel {
    orderModels: OrderModel[];
    constructor() {
        this.orderModels = [];
    }
}