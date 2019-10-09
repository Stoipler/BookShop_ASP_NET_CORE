import { Component, OnInit } from '@angular/core';
import { PrintedEditionModel } from 'src/app/models/printedEditionModels/printedEditionModel';
import { ActivatedRoute } from '@angular/router';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartItemModel } from 'src/app/models/cartItemModel';

@Component({
  selector: 'app-printed-edition-details',
  templateUrl: './printed-edition-details.component.html',
  styleUrls: ['./printed-edition-details.component.css'],
  providers: [PrintedEditionService]
})

export class PrintedEditionDetailsComponent implements OnInit {

  faCartPlus = faCartPlus;
  printedEdition: PrintedEditionModel = new PrintedEditionModel();
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private printedEditionService: PrintedEditionService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.printedEditionService.getById(+params.get('printedEditionId'))
        .subscribe((data: PrintedEditionModel) => this.printedEdition = data);
    });
  }

  addToCart(printedEdition) {
    let cartItems: CartItemModel[] = JSON.parse(localStorage.getItem("cart"));
    if (!cartItems) {
      cartItems = [];
    }
    const cartItem: CartItemModel = new CartItemModel();
    let isItemPresentInCart: boolean = false;
    cartItem.printedEditionId = printedEdition.id;
    cartItem.quantity = this.quantity;
    cartItems.forEach((value: CartItemModel, index: number) => {
      if (cartItem.printedEditionId === value.printedEditionId) {
        cartItems[index] = cartItem;
        localStorage.setItem("cart", JSON.stringify(cartItems));
        isItemPresentInCart = true;
        return;
      }
    })

    if (!isItemPresentInCart) {
      cartItems.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }

}
