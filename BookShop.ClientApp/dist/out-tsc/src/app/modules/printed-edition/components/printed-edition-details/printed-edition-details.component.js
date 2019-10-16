import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PrintedEditionModel } from 'src/app/models/printedEditionModels/printedEditionModel';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartItemModel } from 'src/app/models/cartItemModel';
import { Currency } from 'src/app/enums/currency';
let PrintedEditionDetailsComponent = class PrintedEditionDetailsComponent {
    constructor(route, printedEditionService) {
        this.route = route;
        this.printedEditionService = printedEditionService;
        this.Currency = Currency;
        this.faCartPlus = faCartPlus;
        this.quantity = 1;
        this.printedEdition = new PrintedEditionModel();
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.printedEditionService.getById(+params.get('printedEditionId'))
                .subscribe((data) => this.printedEdition = data);
        });
    }
    addToCart(printedEdition) {
        let cartItems = JSON.parse(localStorage.getItem("cart"));
        if (!cartItems) {
            cartItems = [];
        }
        const cartItem = new CartItemModel();
        let isItemPresentInCart = false;
        cartItem.printedEditionId = printedEdition.id;
        cartItem.quantity = this.quantity;
        cartItems.forEach((value, index) => {
            if (cartItem.printedEditionId === value.printedEditionId) {
                cartItems[index] = cartItem;
                localStorage.setItem("cart", JSON.stringify(cartItems));
                isItemPresentInCart = true;
                return;
            }
        });
        if (!isItemPresentInCart) {
            cartItems.push(cartItem);
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    }
};
PrintedEditionDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-printed-edition-details',
        templateUrl: './printed-edition-details.component.html',
        styleUrls: ['./printed-edition-details.component.css'],
        providers: [PrintedEditionService]
    })
], PrintedEditionDetailsComponent);
export { PrintedEditionDetailsComponent };
//# sourceMappingURL=printed-edition-details.component.js.map