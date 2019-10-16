(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cart/components/cart-items/cart-items.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cart/components/cart-items/cart-items.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"isAnyItemsInCart\">\n    <h3>Checkout</h3>\n    <table class=\"table table-hover\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">Product</th>\n                <th scope=\"col\">Unit price</th>\n                <th scope=\"col\">Qty</th>\n                <th scope=\"col\">Order amount</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of checkout.checkoutItemModels\" class=\"table-secondary\">\n                <th scope=\"row\">{{item.printedEditionName}}</th>\n                <td>{{item.unitPrice.toFixed(2)}}</td>\n                <td>{{item.quantity}}</td>\n                <td>{{item.orderAmount.toFixed(2)}}</td>\n                <td>\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"remove(item)\">\n                        -\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <div class=\"row d-flex justify-content-end\">\n        <div class=\"col-6 d-flex align-items-center justify-content-start\">\n            <h4>Total price: {{checkout.totalPrice.toFixed(2)}}</h4>\n        </div>\n        <div class=\"col-3 d-flex align-items-center justify-content-end\">\n            <button class=\"btn btn-success\" (click)=\"pay(checkout.totalPrice)\">\n                Buy now\n            </button>\n        </div>\n    </div>\n</div>\n<div class=\"container d-flex justify-content-center\" *ngIf=\"!isAnyItemsInCart\">\n    <h3>There is no any items in cart. You can go to <a [routerLink]=\"'/printededition'\">catalog</a> and choose some books</h3>\n</div>\n<div class=\"container btn-group btn-block justify-content-center d-flex\">\n    <div class=\"btn btn-primary \" (click)=\"addTestItems()\">\n        Add test data to table\n    </div>\n    <div class=\"btn btn-danger \" (click)=\"clearCart()\">\n        Clear cart\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/helpers/payment.helper.ts":
/*!*******************************************!*\
  !*** ./src/app/helpers/payment.helper.ts ***!
  \*******************************************/
/*! exports provided: PaymentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHelper", function() { return PaymentHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaymentHelper = class PaymentHelper {
    loadStripe() {
        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            window.document.body.appendChild(s);
        }
    }
};
PaymentHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PaymentHelper);



/***/ }),

/***/ "./src/app/models/orderModels/cartModel.ts":
/*!*************************************************!*\
  !*** ./src/app/models/orderModels/cartModel.ts ***!
  \*************************************************/
/*! exports provided: CartModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModel", function() { return CartModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CartModel {
    constructor() {
        this.checkoutItemModels = [];
        this.totalPrice = 0;
    }
}


/***/ }),

/***/ "./src/app/modules/cart/cart-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/cart/cart-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modules_cart_components_cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/cart/components/cart-items/cart-items.component */ "./src/app/modules/cart/components/cart-items/cart-items.component.ts");
/* harmony import */ var src_app_helpers_authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/authentication.guard */ "./src/app/helpers/authentication.guard.ts");





const routes = [{ path: 'cartitems', component: src_app_modules_cart_components_cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_3__["CartItemsComponent"], canActivate: [src_app_helpers_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]] }];
let CartRoutingModule = class CartRoutingModule {
};
CartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CartRoutingModule);



/***/ }),

/***/ "./src/app/modules/cart/cart.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/cart/cart.module.ts ***!
  \*********************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/modules/cart/cart-routing.module.ts");
/* harmony import */ var _components_cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart-items/cart-items.component */ "./src/app/modules/cart/components/cart-items/cart-items.component.ts");





let CartModule = class CartModule {
};
CartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_4__["CartItemsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"]
        ]
    })
], CartModule);



/***/ }),

/***/ "./src/app/modules/cart/components/cart-items/cart-items.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/cart/components/cart-items/cart-items.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FydC9jb21wb25lbnRzL2NhcnQtaXRlbXMvY2FydC1pdGVtcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/cart/components/cart-items/cart-items.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/cart/components/cart-items/cart-items.component.ts ***!
  \****************************************************************************/
/*! exports provided: CartItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemsComponent", function() { return CartItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_helpers_payment_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/payment.helper */ "./src/app/helpers/payment.helper.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_models_orderModels_cartModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/orderModels/cartModel */ "./src/app/models/orderModels/cartModel.ts");






let CartItemsComponent = class CartItemsComponent {
    constructor(paymentHelper, orderService) {
        this.paymentHelper = paymentHelper;
        this.orderService = orderService;
        this.isAnyItemsInCart = true;
        this.checkout = new src_app_models_orderModels_cartModel__WEBPACK_IMPORTED_MODULE_5__["CartModel"]();
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
        const cartModel = new src_app_models_orderModels_cartModel__WEBPACK_IMPORTED_MODULE_5__["CartModel"]();
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
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publishableKey,
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
CartItemsComponent.ctorParameters = () => [
    { type: src_app_helpers_payment_helper__WEBPACK_IMPORTED_MODULE_2__["PaymentHelper"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }
];
CartItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-items',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cart/components/cart-items/cart-items.component.html")).default,
        providers: [src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-items.component.css */ "./src/app/modules/cart/components/cart-items/cart-items.component.css")).default]
    })
], CartItemsComponent);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-cart-cart-module-es2015.js.map