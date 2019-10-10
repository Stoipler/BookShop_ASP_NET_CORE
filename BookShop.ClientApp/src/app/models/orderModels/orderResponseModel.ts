import { OrderModel } from 'src/app/models/orderModels/orderModel';

export class OrderResponseModel {
    count: number;
    orderModels: OrderModel[];

    constructor() {
        this.count = 0;
        this.orderModels = [];
    }

}