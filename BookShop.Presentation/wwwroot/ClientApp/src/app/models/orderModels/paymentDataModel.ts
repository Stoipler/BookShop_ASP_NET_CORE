import { CartItemModel } from 'src/app/models/orderModels/cartItemModel';

export class PaymentDataModel {
    userId: number;
    stripeEmail: string;
    stripeToken: string;
    cartItemModels: CartItemModel[];
    constructor() {

    }
}