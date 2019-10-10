import { CartItemModel } from 'src/app/models/cartItemModel';
import { CheckoutItemModel } from 'src/app/models/checkoutItemModel';

export class CartModel {
    cartItemModels: CartItemModel[];
    checkoutItemModels:CheckoutItemModel[]
    totalPrice: number;

    constructor(){
        this.checkoutItemModels=[];
        this.totalPrice=0;
    }
}