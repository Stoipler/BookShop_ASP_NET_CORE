import { CartItemModel } from 'src/app/models/orderModels/cartItemModel';
import { CheckoutItemModel } from 'src/app/models/orderModels/checkoutItemModel';

export class CartModel {
    cartItemModels: CartItemModel[];
    checkoutItemModels:CheckoutItemModel[]
    totalPrice: number;

    constructor(){
        this.checkoutItemModels=[];
        this.totalPrice=0;
    }
}