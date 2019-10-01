import { Component, OnInit } from '@angular/core';
import { PrintedEditionModel } from 'src/app/models/printedEditionModel';
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
  orderAmount: number;

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
    const cartItem:CartItemModel=new CartItemModel();
    cartItem.printedEditionId=printedEdition.id;
    cartItem.product=printedEdition.name;
    cartItem.unitPrice=printedEdition.price;
    cartItem.quantity=this.quantity;
    cartItem.orderAmount=cartItem.quantity*cartItem.unitPrice;
    cartItems.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }

}
