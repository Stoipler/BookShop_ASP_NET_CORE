import { Component, OnInit } from '@angular/core';
import { PaymentHelper } from 'src/app/helpers/payment.helper';
import { environment } from 'src/environments/environment'
import { OrderService } from 'src/app/services/order.service';
import { PaymentDataModel } from 'src/app/models/paymentDataModel';
import { CartItemModel } from 'src/app/models/cartItemModel';
import { CartModel } from 'src/app/models/cartModel';
import { CheckoutItemModel } from 'src/app/models/checkoutItemModel';

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
  }

  ngOnInit() {
    this.paymentHelper.loadStripe();
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
    const handler = (<any>window).StripeCheckout.configure({
      key: environment.publishableKey,
      locale: 'auto',
      token: (token: { id: string, email: string }) => {
        const paymentData: PaymentDataModel = {
          stripeEmail: token.email,
          stripeToken: token.id,
        };
        this.orderService.sendPaymentData(paymentData).subscribe();
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
