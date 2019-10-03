import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cartItemModel';
import { PaymentHelper } from 'src/app/helpers/payment.helper';
import { environment } from 'src/environments/environment'
import { OrderService } from 'src/app/services/order.service';
import { PaymentDataModel } from 'src/app/models/paymentDataModel';
import { CartItemPageModel } from 'src/app/models/cartItemPageModel';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
  providers: [OrderService]
})
export class CartItemsComponent implements OnInit {

  cartItems: CartItemModel[] = [];
  isAnyItemsInCart: boolean = false;
  totalPrice: number;
  constructor(private paymentHelper: PaymentHelper, private orderService: OrderService) {
  }

  ngOnInit() {
    this.getAllOrderItems();
    this.paymentHelper.loadStripe();
  }

  getAllOrderItems() {
    const items: CartItemModel[] = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      this.isAnyItemsInCart = true;
      this.orderService.getCartItems({ items: items }).then(response => { }, errors => { });
    }

  }
  remove(item: CartItemModel) {
    this.cartItems = this.arrayRemove(this.cartItems, item);
    localStorage.setItem("cart", JSON.stringify(this.cartItems))
    this.getAllOrderItems()
  }

  pay(amount) {
    const handler = (<any>window).StripeCheckout.configure({
      key: environment.publishableKey,
      locale: 'auto',
      token: (token: { id: string, email: string }) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        let paymentData: PaymentDataModel = new PaymentDataModel();
        paymentData.stripeEmail = token.email;
        paymentData.stripeToken = token.id;
        this.orderService.sendPaymentData(paymentData).subscribe();
      }
    });

    handler.open({
      name: 'Payment service',
      description: '',
      amount: amount * 100
    });
  }

  private arrayRemove(array, value) {
    return array.filter(function (element) {
      return element != value;
    });
  }

}
