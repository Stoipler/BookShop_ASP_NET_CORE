(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/components/orders/orders.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/components/orders/orders.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <table class=\"container table table-hover\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">Order ID</th>\n                <th scope=\"col\">Date</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">Order amount</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let order of orderResponseModel.orderModels\">\n                <th scope=\"col\">{{order.id}}</th>\n                <th scope=\"col\">{{order.creationDate | date: 'short'}}</th>\n                <th scope=\"col\">{{order.description}}</th>\n                <th scope=\"col\">{{order.orderAmount}}</th>\n            </tr>\n        </tbody>\n    </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/components/profile/profile.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/components/profile/profile.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-9\">\r\n            <fa-icon [icon]=\"faUserCircle\" size=\"9x\"></fa-icon>\r\n        </div>\r\n        <div class=\"col-3\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeEditorMode()\">Edit profile</button>\r\n        </div>\r\n    </div>\r\n    <h3>My profile</h3>\r\n    <fieldset [disabled]=\"!isOnEditing\">\r\n        <div class=\"form-group\">\r\n            <label for=\"firstName\">Your First name</label>\r\n            <input id=\"firstName\" class=\"form-control\" placeholder=\"First name\" [(ngModel)]=\"userProfileRequestModel.firstName\" #firstName=\"ngModel\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"lastName\">Your Last name</label>\r\n            <input id=\"lastName\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]=\"userProfileRequestModel.lastName\" #lastName=\"ngModel\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Your E-mail</label>\r\n            <input disabled=\"\" id=\"email\" class=\"form-control\" placeholder=\"E-mail\" [(ngModel)]=\"userProfileRequestModel.email\" #email=\"ngModel\">\r\n        </div>\r\n    </fieldset>\r\n    <div *ngIf=\"isOnEditing\">\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Current password</label>\r\n            <input type=\"password\" id=\"currentPassword\" class=\"form-control\" placeholder=\"Curent password\" [(ngModel)]=\"userProfileRequestModel.currentPassword\" #currentPassword=\"ngModel\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"newPassword\">New password</label>\r\n            <input type=\"password\" id=\"newPassword\" class=\"form-control\" placeholder=\"New password\" [(ngModel)]=\"userProfileRequestModel.password\" #newPassword=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"newPasswordConfirmation\">New password confirmation</label>\r\n            <input type=\"password\" id=\"newPasswordConfirmation\" class=\"form-control\" placeholder=\"New password confirmation\" [(ngModel)]=\"userProfileRequestModel.passwordConfirmation\" #newPasswordConfirmation=\"ngModel\" pattern={{userProfileRequestModel.password}}/>\r\n        </div>\r\n        <div class=\"d-flex btn-group\">\r\n            <button class=\"btn btn-success\" (click)=\"updateProfile()\">\r\n                    Confrim changes   \r\n                </button>\r\n            <button class=\" btn btn-danger\" (click)=\"getProfile()\">\r\n                    Cancel\r\n                </button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/models/userModels/userProfileRequestModel.ts":
/*!**************************************************************!*\
  !*** ./src/app/models/userModels/userProfileRequestModel.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRequestModel", function() { return UserProfileRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models_userModels_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/userModels/userModel */ "./src/app/models/userModels/userModel.ts");


class UserProfileRequestModel extends src_app_models_userModels_userModel__WEBPACK_IMPORTED_MODULE_1__["UserModel"] {
    constructor() {
        super();
        this.currentPassword = '';
        this.password = '';
        this.passwordConfirmation = '';
    }
}


/***/ }),

/***/ "./src/app/modules/user/components/orders/orders.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/components/orders/orders.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9jb21wb25lbnRzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/user/components/orders/orders.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/user/components/orders/orders.component.ts ***!
  \********************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_models_orderModels_orderResponseModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/orderModels/orderResponseModel */ "./src/app/models/orderModels/orderResponseModel.ts");




let OrdersComponent = class OrdersComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.orderResponseModel = new src_app_models_orderModels_orderResponseModel__WEBPACK_IMPORTED_MODULE_3__["OrderResponseModel"]();
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        this.orderService.getOrdersForUser().subscribe((data) => {
            this.orderResponseModel = data;
        });
    }
};
OrdersComponent.ctorParameters = () => [
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
];
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/components/orders/orders.component.html")).default,
        providers: [src_app_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.css */ "./src/app/modules/user/components/orders/orders.component.css")).default]
    })
], OrdersComponent);



/***/ }),

/***/ "./src/app/modules/user/components/profile/profile.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user/components/profile/profile.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/user/components/profile/profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/components/profile/profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_userModels_userProfileRequestModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/userModels/userProfileRequestModel */ "./src/app/models/userModels/userProfileRequestModel.ts");





let ProfileComponent = class ProfileComponent {
    constructor(userService) {
        this.userService = userService;
        this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCircle"];
        this.userProfileRequestModel = new src_app_models_userModels_userProfileRequestModel__WEBPACK_IMPORTED_MODULE_4__["UserProfileRequestModel"]();
        this.isOnEditing = false;
    }
    ngOnInit() {
        this.getProfile();
    }
    getProfile() {
        this.userService.getUserProfile().subscribe((response) => {
            this.userProfileRequestModel = new src_app_models_userModels_userProfileRequestModel__WEBPACK_IMPORTED_MODULE_4__["UserProfileRequestModel"]();
            this.userProfileRequestModel.id = response.id;
            this.userProfileRequestModel.firstName = response.firstName;
            this.userProfileRequestModel.lastName = response.lastName;
            this.userProfileRequestModel.isRemoved = response.isRemoved;
            this.userProfileRequestModel.email = response.email;
        });
    }
    updateProfile() {
        this.userService.updateUserProfile(this.userProfileRequestModel).subscribe((success) => {
            this.getProfile();
        });
    }
    changeEditorMode() {
        this.isOnEditing = !this.isOnEditing;
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/components/profile/profile.component.html")).default,
        providers: [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/modules/user/components/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/modules/user/user-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/user/user-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_helpers_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/authentication.guard */ "./src/app/helpers/authentication.guard.ts");
/* harmony import */ var src_app_modules_user_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/user/components/orders/orders.component */ "./src/app/modules/user/components/orders/orders.component.ts");
/* harmony import */ var src_app_modules_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/user/components/profile/profile.component */ "./src/app/modules/user/components/profile/profile.component.ts");






const routes = [
    { path: 'profile', component: src_app_modules_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [src_app_helpers_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]] },
    { path: 'orders', component: src_app_modules_user_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"], canActivate: [src_app_helpers_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]] },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/modules/user/user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/modules/user/user-routing.module.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/modules/user/components/orders/orders.component.ts");
/* harmony import */ var src_app_modules_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/user/components/profile/profile.component */ "./src/app/modules/user/components/profile/profile.component.ts");









let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_modules_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-user-user-module-es2015.js.map