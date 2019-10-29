import { CartItemModel } from 'src/app/models/orderModels/cartItemModel';

export class PaymentDataModel {
    public userId: string;
    public stripeEmail: string;
    public stripeToken: string;
    public cartItemModels: CartItemModel[];
}
