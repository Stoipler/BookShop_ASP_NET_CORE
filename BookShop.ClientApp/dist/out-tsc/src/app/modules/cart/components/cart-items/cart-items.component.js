import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderService } from 'src/app/services/order.service';
import { CartModel } from 'src/app/models/cartModel';
let CartItemsComponent = class CartItemsComponent {
    constructor(paymentHelper, orderService) {
        this.paymentHelper = paymentHelper;
        this.orderService = orderService;
        this.isAnyItemsInCart = true;
        this.checkout = new CartModel();
    }
    ngOnInit() {
        this.getCartItemsList();
    }
    getCartItemsList() {
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        if (!cartItems) {
            this.isAnyItemsInCart = false;
            return;
        }
        this.isAnyItemsInCart = true;
        const cartModel = new CartModel();
        cartModel.cartItemModels = cartItems;
        this.orderService.getCheckout(cartModel).subscribe((data) => {
            this.checkout = data;
            this.checkout.cartItemModels = cartItems;
        });
    }
    remove(checkoutItem) {
        let cartItems = JSON.parse(localStorage.getItem("cart"));
        cartItems.forEach((value, index) => {
            if (value.printedEditionId === checkoutItem.printedEditionId) {
                cartItems.splice(index, 1);
            }
        });
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.getCartItemsList();
    }
    pay(amount) {
        this.paymentHelper.loadStripe();
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const handler = window.StripeCheckout.configure({
            key: environment.publishableKey,
            locale: 'auto',
            token: (token) => {
                const paymentData = {
                    userId: currentUser.id,
                    stripeEmail: token.email,
                    stripeToken: token.id,
                    cartItemModels: this.checkout.cartItemModels
                };
                this.orderService.sendPaymentData(paymentData).subscribe((success) => {
                    this.clearCart();
                });
            }
        });
        handler.open({
            name: 'Payment service',
            description: '',
            amount: amount * 100
        });
    }
    addTestItems() {
        const testData = [{ printedEditionId: 3, quantity: 2 },
            { printedEditionId: 1, quantity: 4 },
            { printedEditionId: 2, quantity: 5 },
            { printedEditionId: 4, quantity: 1 },
            { printedEditionId: 5, quantity: 2 }];
        localStorage.setItem("cart", JSON.stringify(testData));
        this.getCartItemsList();
    }
    clearCart() {
        localStorage.removeItem("cart");
        this.getCartItemsList();
    }
};
CartItemsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-cart-items',
        templateUrl: './cart-items.component.html',
        styleUrls: ['./cart-items.component.css'],
        providers: [OrderService]
    })
], CartItemsComponent);
export { CartItemsComponent };
//# sourceMappingURL=cart-items.component.js.map