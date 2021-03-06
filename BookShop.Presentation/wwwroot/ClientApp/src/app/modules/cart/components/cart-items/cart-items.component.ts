import { Component, OnInit } from '@angular/core';
import { PaymentHelper } from 'src/app/helpers/payment.helper';
import { environment } from 'src/environments/environment';
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

  public isAnyItemsInCart: boolean;
  public checkout: CartModel;

  constructor(private paymentHelper: PaymentHelper, private orderService: OrderService) {
    this.checkout = new CartModel();
    this.paymentHelper.loadStripe();
    this.isAnyItemsInCart = true;
  }

  ngOnInit() {
    this.getCartItemsList();
  }

  public getCartItemsList() {
    const cartItems: CartItemModel[] = JSON.parse(localStorage.getItem('cart'));
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
    });
  }

  public remove(checkoutItem: CheckoutItemModel) {
    const cartItems: CartItemModel[] = JSON.parse(localStorage.getItem('cart'));
    cartItems.forEach((value: CartItemModel, index: number) => {
      if (value.printedEditionId === checkoutItem.printedEditionId) {
        cartItems.splice(index, 1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.getCartItemsList();
  }


  public pay(amount) {
    const currentUser: { id: number } = JSON.parse(localStorage.getItem('currentUser'));
    const handler = (window as any).StripeCheckout.configure({
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

  public clearCart() {
    localStorage.removeItem('cart');
    this.getCartItemsList();
  }
}
