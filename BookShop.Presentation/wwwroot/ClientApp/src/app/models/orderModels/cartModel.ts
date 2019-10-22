import { CartItemModel } from 'src/app/models/orderModels/cartItemModel';
import { CheckoutItemModel } from 'src/app/models/orderModels/checkoutItemModel';

export class CartModel {
    public cartItemModels: CartItemModel[];
    public checkoutItemModels: CheckoutItemModel[];
    public totalPrice: number;

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.checkoutItemModels = [];
        this.totalPrice = 0;
    }
}
