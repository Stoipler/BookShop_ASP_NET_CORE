import { Component, OnInit } from '@angular/core';
import { PrintedEditionModel } from 'src/app/models/printedEditionModel';
import { CartItemModel } from 'src/app/models/cartItemModel';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartItems: CartItemModel[] = [];
  totalPrice: number = 0;
  constructor() { }

  ngOnInit() {
    this.getAllOrderItems();
  }

  getAllOrderItems() {
    this.totalPrice = 0;
    const cart: CartItemModel[] = [];
    var archive,
      keys = Object.keys(localStorage),
      i = 0, key;
    for (; key = keys[i]; i++) {
      if (key !== "currentUser") {
        const cartItem: CartItemModel = JSON.parse(localStorage.getItem(key));
        cart.push(cartItem);
        this.totalPrice += cartItem.orderAmount;
      }
    }
    this.cartItems = cart;
  }
  remove(item: CartItemModel) {
    localStorage.removeItem(item.printedEditionId.toString())
    this.cartItems = this.arrayRemove(this.cartItems, item);
    this.getAllOrderItems()
  }

  private arrayRemove(array, value) {
    return array.filter(function (element) {
      return element != value;
    });
  }

}
