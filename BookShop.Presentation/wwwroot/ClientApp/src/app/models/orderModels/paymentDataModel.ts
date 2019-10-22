import { CartItemModel } from 'src/app/models/orderModels/cartItemModel';

export class PaymentDataModel {
    public userId: number;
    public stripeEmail: string;
    public stripeToken: string;
    public cartItemModels: CartItemModel[];
}
