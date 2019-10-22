import { OrderModel } from 'src/app/models/orderModels/orderModel';

export class OrderResponseModel {
    public count: number;
    public orderModels: OrderModel[];

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.count = 0;
        this.orderModels = [];
    }
}
