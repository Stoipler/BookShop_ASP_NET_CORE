import { Component, OnInit } from '@angular/core';
import { PrintedEditionModel } from 'src/app/models/printedEditionModel';
import { CartItemModel } from 'src/app/models/cartItemModel';
import { PaymentHelper } from 'src/app/helpers/payment.helper';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartItems: CartItemModel[] = [];
  totalPrice: number=0;
  constructor(private paymentHelper: PaymentHelper) {
  }

  ngOnInit() {
    this.getAllOrderItems();
    this.paymentHelper.loadStripe();
  }

  getAllOrderItems() {
    this.totalPrice = 0;
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
    this.cartItems.forEach((value) => {
      this.totalPrice += value.orderAmount;
    });
    
  }
  remove(item: CartItemModel) {
    this.cartItems = this.arrayRemove(this.cartItems, item);
    localStorage.setItem("cart",JSON.stringify(this.cartItems))
    this.getAllOrderItems()
  }

  pay(amount) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
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
