import { Component, OnInit } from '@angular/core';
import { PaymentHelper } from 'src/app/helpers/payment.helper';
import { environment } from 'src/environments/environment'
import { OrderService } from 'src/app/services/order.service';
import { PaymentDataModel } from 'src/app/models/orderModels/paymentDataModel';
import { CartItemModel } from 'src/app/models/orderModels/cartItemModel';
import { CartModel } from 'src/app/models/orderModels/cartModel';
import { CheckoutItemModel } from 'src/app/models/orderModels/checkoutItemModel';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
  providers: [OrderService]
})
export class CartItemsComponent implements OnInit {

  isAnyItemsInCart: boolean = true;
  checkout: CartModel;
  constructor(private paymentHelper: PaymentHelper, private orderService: OrderService) {
    this.checkout=new CartModel();
  }

  ngOnInit() {
    this.getCartItemsList();
  }

  getCartItemsList() {
    const cartItems: CartItemModel[] = JSON.parse(localStorage.getItem("cart"));
    if (!cartItems) {
      this.isAnyItemsInCart = false;
      return;
    }
    this.isAnyItemsInCart = true;
    const cartModel: CartModel = new CartModel();
    cartModel.cartItemModels = cartItems;
    this.orderService.getCheckout(cartModel).subscribe((data: CartModel) => {
      this.checkout = data;
      this.checkout.cartItemModels = cartItems;
    })
  }

  remove(checkoutItem: CheckoutItemModel) {
    let cartItems: CartItemModel[] = JSON.parse(localStorage.getItem("cart"));
    cartItems.forEach((value: CartItemModel, index: number) => {
      if (value.printedEditionId === checkoutItem.printedEditionId) {
        cartItems.splice(index, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cartItems));
    this.getCartItemsList();
  }


  pay(amount) {
    this.paymentHelper.loadStripe();
    const currentUser: { id: number } = JSON.parse(localStorage.getItem("currentUser"));
    const handler = (<any>window).StripeCheckout.configure({
      key: environment.publishableKey,
      locale: 'auto',
      token: (token: { id: string, email: string }) => {
        const paymentData: PaymentDataModel = {
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
    const testData: CartItemModel[] =
      [{ printedEditionId: 3, quantity: 2 },
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

}
