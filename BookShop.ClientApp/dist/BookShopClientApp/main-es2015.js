(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-toast-container aria-live=\"polite\" aria-atomic=\"true\"></app-toast-container>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"'/'\">Book publishing company</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" [routerLink]=\"'/author'\">Authors</a>\r\n                </li>\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" [routerLink]=\"'/printededition'\">Catalog</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"row align-items-center justify-content-around d-flex\">\r\n                <div class=\"col-4 justify-content-center d-flex nav-item dropdown\" *ngIf=\"isAdmin()\">\r\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <fa-icon [icon]=\"faTools\" size=\"3x\" [styles]=\"{'color':'white'}\"></fa-icon>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu left\" x-placement=\"bottom-start\" style=\"position: absolute; transform: translate3d(0px, 40px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                        <a class=\"nav-link\" [routerLink]=\"'/admin/productmanagement'\">Products management</a>\r\n                        <a class=\"nav-link\" [routerLink]=\"'/admin/ordermanagement'\">Orders management</a>\r\n                        <a class=\"nav-link\" [routerLink]=\"'/admin/usermanagement'\">Users management</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 justify-content-center d-flex nav-item\">\r\n                    <a [routerLink]=\"'/cart/cartitems'\">\r\n                        <fa-icon [icon]=\"faCartPlus\" size=\"3x\" [styles]=\"{'color':'white'}\"></fa-icon>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 justify-content-center d-flex nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <fa-icon [icon]=\"faUserCircle\" size=\"3x\" [styles]=\"{'color':'white'}\"></fa-icon>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu left\" x-placement=\"bottom-start\" style=\"position: absolute; transform: translate3d(0px, 40px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                        <div *ngIf=\"!isLogedOn()\">\r\n                            <a class=\"dropdown-item\" [routerLink]=\"'/account/signin'\">Sign In</a>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"'/account/signup'\">Sign Up</a>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"'/account/forgotpassword'\">Password assistance</a>\r\n                        </div>\r\n                        <div *ngIf=\"isLogedOn()\">\r\n                            <a class=\"dropdown-item\" [routerLink]=\"'/user/profile'\">My profile</a>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"'/user/orders'\">My orders</a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item btn\" *ngIf=\"isLogedOn()\" (click)=\"logout()\">Logout</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container d-flex justify-content-center\">\n    <h3><strong> Home page</strong></h3>\n</div>\n<div class=\"container\">\n    <p>This is main page of the book publishing site. There is provided information about company and some useful info (<strong>phone details, address, e-mail, etc.</strong>)</p>\n    <p>This paragraph contains some historical facts.</p>\n    <p>There will be list of events organized by company.</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toast-container/toast-container.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toast-container/toast-container.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngb-toast *ngFor=\"let toast of toastService.toasts\" [header]=\"toast.header\" [autohide]=\"true\" [delay]=\"toast.delay || 5000\" (hide)=\"toastService.remove(toast)\">{{toast.body}}</ngb-toast>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/account/account.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/account/account.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row align-items-center justify-content-center\">\n    <fa-icon [icon]=\"faUserCircle\" size=\"9x\"></fa-icon>\n</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/email-confirmed/email-confirmed.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/email-confirmed/email-confirmed.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Email confirmed. Thank for you registration.</p>\n<button class=\"btn btn-default\">\n\n</button>\n<a [routerLink]=\"'/'\">\n    <button type=\"button\" class=\"btn btn-primary btn-lg\">\n        Continue\n    </button>\n</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/forgot-password/forgot-password.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/forgot-password/forgot-password.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"text-center\">\n        <h3>Password assistance</h3>\n    </div>\n    <div *ngIf=\"isEmailSended\">\n        <p>\n            We sent a message to e-mail that you provided.\n        </p>\n        <p>\n            Please check yor e-mail box and follow the link in message for further details.\n        </p>\n        <div class=\"row align-items-center justify-content-center\">\n            <a class=\"btn btn-success\" href=\"#\">Continue</a>\n        </div>\n    </div>\n    <div *ngIf=\"!isEmailSended\">\n        <div class=\"form-group\">\n            <p>\n                Enter the email address associated with your account\n            </p>\n            <label>Your E-mail</label>\n            <input class=\"form-control\" name=\"email\" [(ngModel)]=\"requestModel.email\" #email=\"ngModel\" required />\n            <div [hidden]=\"email.valid || email.untouched\" class=\"alert alert-danger\">\n                Please enter correct E-mail\n            </div>\n        </div>\n\n        <div class=\"d-flex justify-content-center\">\n            <button [disabled]=\" email.invalid\" class=\"btn btn-success\" (click)=\"forgotPassword()\">Continue</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/reset-password/reset-password.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/reset-password/reset-password.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isPasswordChanged\">\n    <h3>\n        Password changed!\n    </h3>\n</div>\n<div *ngIf=\"!isPasswordChanged\">\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"requestModel.password\" #password=\"ngModel\" required />\n        <div [hidden]=\"password.valid || password.untouched\" class=\"alert alert-danger\">\n            Please enter correct password\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Password confirmation</label>\n        <input type=\"password\" class=\"form-control\" name=\"passwordConfirmation\" [(ngModel)]=\"requestModel.passwordConfirmation\" #passwordConfirmation=\"ngModel\" required />\n        <div [hidden]=\"passwordConfirmation.valid || passwordConfirmation.untouched\" class=\"alert alert-danger\">\n            Please enter correct password\n        </div>\n    </div>\n\n    <button [disabled]=\" password.invalid || passwordConfirmation.invalid\" class=\"btn btn-default\" (click)=\"resetPassword()\">Confirm</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/sign-in/sign-in.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/sign-in/sign-in.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"text-center\">\n        <h3>Sign-In</h3>\n    </div>\n    <div class=\"form-group\">\n        <label>Your E-mail</label>\n        <input class=\"form-control\" name=\"email\" [(ngModel)]=\"signInRequestModel.email\" #email=\"ngModel\" required />\n        <div [hidden]=\"email.valid || email.untouched\" class=\"alert alert-danger\">\n            Please enter correct E-mail\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"row m-0 justify-content-between align-items-center\">\n            <label for=\"password\">Password</label>\n            <a class=\"btn btn-link\" [routerLink]=\"'/account/forgotpassword'\">Forgot your password?</a>\n        </div>\n        <input type=\"password\" id=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"signInRequestModel.password\" #password=\"ngModel\" required />\n        <div [hidden]=\"password.valid || password.untouched\" class=\"alert alert-danger\">\n            Please enter correct password\n        </div>\n    </div>\n\n    <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-6 d-flex align-items-center justify-content-center\">\n            <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"rememberMe\" name=\"rememberMe\">\n                <label class=\"custom-control-label\" for=\"rememberMe\">Remember me</label>\n            </div>\n        </div>\n        <div class=\"col-6 d-flex align-items-center justify-content-center\">\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\" email.invalid|| password.invalid \" (click)=\"signIn()\">Sign In</button>\n        </div>\n    </div>\n    <div class=\"row justify-content-center\">\n        <p>\n            New to book publishing company?\n            <a [routerLink]=\"'/account/signup'\">Sign Up</a>\n        </p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/sign-up/sign-up.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/sign-up/sign-up.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"text-center\">\r\n        <h3>Create account</h3>\r\n    </div>\r\n    <div *ngIf=\"isSignUpSuccessful\">\r\n        <h3>\r\n            <strong>Confirm your email adress</strong>\r\n        </h3>\r\n        <p>\r\n            We have sent an email with a confirmation link to your email adress. In order to complete the sign-up process, please clic the confirmation link.\r\n        </p>\r\n        <p>\r\n            If you didn't receive a confirmation email, please check your spam folder. Also, please verify that you entered a valid email address in our sign-up form.\r\n        </p>\r\n    </div>\r\n    <div *ngIf=\"!isSignUpSuccessful\">\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label>Your First name</label>\r\n            <input class=\"form-control\" placeholder=\"First name\" name=\"firstName\" [(ngModel)]=\"signUpRequestModel.firstName\" #firstName=\"ngModel\" required />\r\n            <div [hidden]=\"firstName.valid || firstName.untouched\" class=\"alert alert-danger\">\r\n                Please enter Your First name\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Your Last name</label>\r\n            <input class=\"form-control\" placeholder=\"Last name\" name=\"lastName\" [(ngModel)]=\"signUpRequestModel.lastName\" #lastName=\"ngModel\" required />\r\n            <div [hidden]=\"lastName.valid || lastName.untouched\" class=\"alert alert-danger\">\r\n                Please enter Your Last name\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>E-mail</label>\r\n            <input type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" class=\"form-control\" placeholder=\"E-mail\" name=\"email\" [(ngModel)]=\"signUpRequestModel.email\" #email=\"ngModel\" required />\r\n            <div [hidden]=\"email.valid || email.untouched\" class=\"alert alert-danger\">\r\n                Please enter a valid email address\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" placeholder=\"At least 6 characters\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\" class=\"form-control\" name=\"password\" [(ngModel)]=\"signUpRequestModel.password\" #password=\"ngModel\" required />\r\n            <div [hidden]=\"password.valid || password.untouched\" class=\"alert alert-danger\">\r\n                Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password confirmation</label>\r\n            <input type=\"password\" placeholder=\"Password should be the same\" pattern=\"{{ signUpRequestModel.password }}\" class=\"form-control\" name=\"passwordConfirmation\" [(ngModel)]=\"signUpRequestModel.passwordConfirmation\" #passwordConfirmation=\"ngModel\" required\r\n            />\r\n            <div [hidden]=\"passwordConfirmation.valid || passwordConfirmation.untouched\" class=\"alert alert-danger\">\r\n                Password should be the same\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-center\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"firstName.invalid || lastName.invalid || \r\n    email.invalid|| password.invalid || passwordConfirmation.invalid\" (click)=\"signUp()\">Sign Up your account</button>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            Already have an account?\r\n            <a [routerLink]=\"'/account/signin'\">Sign-In</a>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/author-management/author-management.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/author-management/author-management.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #authorEditor let-modal data-backdrop='static'>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Author editor</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"authorName\">Author's name</label>\n        <input type=\"text\" class=\"form-control\" id=\"authorName\" aria-describedby=\"nameHelp\" placeholder=\"Enter name\" [(ngModel)]=\"author.name\" name=\"name\" #name=\"ngModel\" required>\n        <small id=\"nameHelp\" class=\"form-text text-muted\">Enter here name of the author</small>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancel()\" (click)=\"modal.close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" [disabled]=\"name.invalid\" ngbAutofocus class=\"btn btn-danger\" (click)=\"save()\" (click)=\"modal.close()\">Confirm</button>\n    </div>\n</ng-template>\n\n<div class=\" container d-flex justify-content-end align-items-center\">\n    <label for=\"addProduct\">Add new author</label>\n    <button id=\"addProduct\" class=\"btn \" (click)=\"openModal(authorEditor)\">\n          <fa-icon [icon]=\"faPlusCircle\"></fa-icon>\n        </button>\n</div>\n\n<table class=\"container table table-hover\">\n    <thead class=\"thead-dark\">\n        <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Product</th>\n            <th scope=\"col\">Management</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let author of authorResponseModel.authorsList\" class=\"table-secondary\">\n            <th scope=\"row\">{{author.id}}</th>\n            <td>{{author.name}}</td>\n            <td>\n                <div *ngFor=\"let printedEdition of author.printedEditionModels\">\n                    <p>{{printedEdition.name}}</p>\n                </div>\n            </td>\n            <td>\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"editAuthor(author)\" (click)=\"openModal(authorEditor)\">\n              <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n            </button>\n\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<div class=\"footer\">\n    <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"authorResponseModel.count\" [(page)]=\"authorRequestModel.page\" [pageSize]=\"authorRequestModel.pageSize\" [maxSize]=\"3\" (pageChange)=\"getAuthors()\"></ngb-pagination>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/order-management/order-management.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/order-management/order-management.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <input type=\"text\" autocomplete=\"off\" (keyup)=\"getOrders()\" class=\"form-control\" id=\"authorsSearch\" [(ngModel)]=\"orderRequestModel.keyWord\" name=\"keyWord\" #keyWord=\"ngModel\" placeholder=\"Type there for search order by user first name, last name or email\">\n\n    <table class=\"container table table-hover\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">Order ID</th>\n                <th scope=\"col\">Date</th>\n                <th scope=\"col\">User name</th>\n                <th scope=\"col\">User e-mail</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">Order amount</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let order of orderResponseModel.orderModels\">\n                <th scope=\"col\">{{order.id}}</th>\n                <th scope=\"col\">{{order.creationDate | date: 'short'}}</th>\n                <th scope=\"col\">{{order.firstName}} {{order.lastName}}</th>\n                <th scope=\"col\">{{order.email}}</th>\n                <th scope=\"col\">{{order.description}}</th>\n                <th scope=\"col\">{{order.orderAmount}}</th>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<div class=\"footer\">\n    <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"orderResponseModel.count\" [(page)]=\"orderRequestModel.page\" [pageSize]=\"orderRequestModel.pageSize\" [maxSize]=\"3\" (pageChange)=\"getOrders()\"></ngb-pagination>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/product-management/product-management.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/product-management/product-management.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #productEditor let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Product editor</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"container body\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"form-group\">\n                    <label for=\"printedEditionName\">Title</label>\n                    <input type=\"text\" class=\"form-control\" id=\"printedEditionName\" placeholder=\"Title\" [(ngModel)]=\"printedEdition.name\" name=\"name\" #name=\"ngModel\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"description\">Description</label>\n                    <textarea class=\"form-control\" id=\"description\" rows=\"3\" id=\"printedEditionDescription\" placeholder=\"Description\" [(ngModel)]=\"printedEdition.description\" name=\"description\" #description=\"ngModel\" required>\n            </textarea>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label for=\"categorySelect\">Category</label>\n                        <select class=\"form-control\" id=\"categorySelect\" [(ngModel)]=\"printedEdition.type\">\n              <option *ngFor=\"let item of enumMap(PrintedEditionType,'Choose category')\" [ngValue]=\"item.id\">\n                {{item.name}}\n              </option>\n            </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label for=\"printedEditionPrice\">Price</label>\n                        <input type=\"number\" min=\"0\" class=\"form-control\" id=\"printedEditionPrice\" [(ngModel)]=\"printedEdition.price\" name=\"price\" #price=\"ngModel\" required>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div ngbDropdown class=\"d-inline-block\">\n                        <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>\n              Choose author\n              <input type=\"text\" autocomplete=\"off\" (keyup)=\"getAuthors()\" class=\"form-control\" id=\"authorsSearch\"\n                [(ngModel)]=\"authorRequestModel.name\" name=\"authorName\"\n                #authorName=\"ngModel\">\n            </button>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                            <div class=\"dropDownScrollable\">\n                                <button ngbDropdownItem *ngFor=\"let a of authorResponseModel.authorsList\" (click)=\"addAuthorToList(a)\">\n                  {{a.name}}\n                </button>\n                            </div>\n                            <div class=\"dropdown-divider\"></div>\n                            Selected authors\n                            <div class=\"dropdown-divider\"></div>\n                            <div class=\"dropDownScrollable\">\n                                <div *ngFor=\"let a of authorRequestModel.ignoreAuthorsList\">\n                                    <div class=\"row align-items-center\">\n                                        <div class=\"col-9\">\n                                            {{a.name}}\n                                        </div>\n                                        <div class=\"col-2\" (click)=\"removeFromList(a)\">\n                                            <fa-icon [icon]=\"faTimes\"></fa-icon>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label for=\"currencySelect\">Currency</label>\n                        <select class=\"form-control\" id=\"currencySelect\" [(ngModel)]=\"printedEdition.currency\">\n              <option *ngFor=\"let item of enumMap(Currency,'Set currency')\" [ngValue]=\"item.id\">\n                {{item.name}}\n              </option>\n            </select>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancel()\" (click)=\"modal.close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" [disabled]=\"name.invalid||description.invalid\" ngbAutofocus class=\"btn btn-danger\" (click)=\"save()\" (click)=\"modal.close()\">Confirm</button>\n    </div>\n</ng-template>\n\n\n<div class=\"container\">\n    <input type=\"text\" autocomplete=\"off\" (keyup)=\"getPrintedEditions()\" class=\"form-control\" id=\"authorsSearch\" [(ngModel)]=\"printedEditionsRequestModel.keyWord\" name=\"keyWord\" #keyWord=\"ngModel\" placeholder=\"Type there for search by printed edition title, description\">\n\n    <div class=\"row mb-5 align-items-end justify-content-around d-flex\">\n        <div class=\"col-sm\">\n            <label for=\"minPrice\" class=\"m-0\">Price from:</label>\n            <input type=\"number\" min=\"0\" class=\"form-control\" id=\"minPrice\" [(ngModel)]=\"filterForm.priceFrom\" name=\"priceFrom\" #priceFrom=\"ngModel\">\n        </div>\n        <div class=\"col-sm\">\n            <label for=\"maxPrice\" class=\"m-0\">Price to:</label>\n            <input type=\"number\" class=\"form-control\" id=\"maxPrice\" [(ngModel)]=\"filterForm.priceTo\" name=\"priceTo\" #priceTo=\"ngModel\">\n        </div>\n\n        <div class=\"col-sm\">\n            <label for=\"sortTypeSelect\" class=\"m-0\">Sort by:</label>\n            <select class=\"form-control\" id=\"sortTypeSelect\" [(ngModel)]=\"filterForm.sortCriteria\">\n      <option *ngFor=\"let item of enumMap(SortCriteria,'None')\" [ngValue]=\"item.id\">\n        {{item.name}}\n      </option>\n    </select>\n        </div>\n        <div class=\"col-sm\">\n            <label for=\"printedEditionTypeSelect\" class=\"m-0\">Printed edition type:</label>\n            <select class=\"form-control\" id=\"printedEditionTypeSelect\" [(ngModel)]=\"filterForm.printedEditionType\">\n      <option *ngFor=\"let item of enumMap(PrintedEditionType,'All types')\" [ngValue]=\"item.id\">\n        {{item.name}}\n      </option>\n    </select>\n        </div>\n\n        <div class=\"col-sm d-flex justify-content-end\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"setSearchParameters()\">search</button>\n        </div>\n    </div>\n</div>\n<div class=\" container d-flex justify-content-end align-items-center\">\n    <label for=\"addProduct\">Add new product</label>\n    <button id=\"addProduct\" class=\"btn \" (click)=\"openModal(productEditor)\">\n      <fa-icon [icon]=\"faPlusCircle\"></fa-icon>\n    </button>\n</div>\n\n<table class=\"container table table-hover\">\n    <thead class=\"thead-dark\">\n        <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Category</th>\n            <th scope=\"col\">Author</th>\n            <th scope=\"col\">\n                Price\n            </th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let printedEdition of printedEditionsResponseModel.printedEditionModels\" class=\"table-secondary\">\n            <th scope=\"row\">{{printedEdition.id}}</th>\n            <td>{{printedEdition.name}}</td>\n            <td> {{printedEdition.description}}</td>\n            <td>{{PrintedEditionType[printedEdition.type]}}</td>\n            <td>\n                <div *ngFor=\"let author of printedEdition.authorModels\">\n                    {{author.name}}\n                </div>\n            </td>\n            <td>{{printedEdition.price.toFixed(2)}} {{Currency[printedEdition.currency]}}</td>\n            <td>\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"edit(printedEdition)\" (click)=\"openModal(productEditor)\">\n          <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n        </button>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<ngb-pagination class=\"row justify-content-center\" [collectionSize]=\"printedEditionsResponseModel.count\" [(page)]=\"printedEditionsRequestModel.page\" [pageSize]=\"printedEditionsRequestModel.pageSize\" [maxSize]=\"3\" (pageChange)=\"getPrintedEditions()\"></ngb-pagination>z");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/user-management/user-management.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/user-management/user-management.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <input type=\"text\" autocomplete=\"off\" (keyup)=\"getUsers()\" class=\"form-control\" id=\"authorsSearch\" [(ngModel)]=\"userRequestModel.keyWord\" name=\"keyWord\" #keyWord=\"ngModel\" placeholder=\"Type there for search user by first name, last name or email\">\n\n    <table class=\"container table table-hover\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\">User name</th>\n                <th scope=\"col\">User e-mail</th>\n                <th scope=\"col\">Is removed</th>\n                <th scope=\"col\">Controls</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let user of userResponseModel.userModels\">\n                <th scope=\"col\">{{user.id}}</th>\n                <th scope=\"col\">{{user.firstName}} {{user.lastName}}</th>\n                <th scope=\"col\">{{user.email}}</th>\n                <th scope=\"col\">\n                    <div class=\"custom-control custom-switch d-flex justify-content-center\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch{{user.id}}\" checked=\"\" (click)=\"changeUserStatus(user)\" [(ngModel)]=\"user.isRemoved\" #isRemoved=\"ngModel\">\n                        <label class=\"custom-control-label\" for=\"customSwitch{{user.id}}\"></label>\n                    </div>\n                </th>\n                <th scope=\"col\">\n                    <div class=\"btn-group\">\n                        <div class=\"btn btn-sm btn-danger\" (click)=\"editUser(user)\" (click)=\"openModal(userEditor)\">\n                            <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                        </div>\n                    </div>\n                </th>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<div class=\"footer\">\n    <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"userResponseModel.count\" [(page)]=\"userRequestModel.page\" [pageSize]=\"userRequestModel.pageSize\" [maxSize]=\"3\" (pageChange)=\"getUsers()\"></ngb-pagination>\n</div>\n\n<ng-template #userEditor let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">User editor</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <label for=\"firstName\">First Name:</label>\n        <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"userModel.firstName\" #firstName=\"ngModel\" placeholder=\"First name\">\n        <label for=\"lastName\">Last Name:</label>\n        <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"userModel.lastName\" #lastName=\"ngModel\" placeholder=\"Last name\">\n        <label for=\"email\">Email:</label>\n        <input [disabled]=\"\" type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"userModel.email\" #email=\"ngModel\" placeholder=\"email\">\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\" (click)=\"saveChanges()\">Save</button>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <img class=\"card-img-top\" src=\"assets/book.png\" alt=\"Card image cap\">\n        </div>\n        <div class=\"col\">\n            <div class=\"card\" style=\"height: 100%\">\n                <div class=\"card-header\">\n                    <h3>{{printedEdition.name}}</h3>\n                    <p>By :</p>\n                    <p *ngFor=\"let author of printedEdition.authorModels\">\n                        <strong>\n                        {{author.name}}\n                    </strong>\n                    </p>\n                </div>\n                <div class=\"card-body align-items-center justify-content-end\">\n                    <div class=\"form-group\">\n                        <label for=\"select\">Quantity</label>\n                        <select class=\"form-control\" id=\"select\" [(ngModel)]=\"quantity\">\n                                      <option value=1>1</option>\n                                      <option value=2>2</option>\n                                      <option value=3>3</option>\n                                      <option value=4>4</option>\n                                      <option value=5>5</option>\n                                    </select>\n                    </div>\n                    <button class=\"btn btn-success\" (click)=\"addToCart(printedEdition)\">\n                            <fa-icon [icon]=\"faCartPlus\"></fa-icon> Add to cart\n                        </button>\n                </div>\n                <div class=\"card-footer\">\n                    <h3>\n                        {{printedEdition.price.toFixed(2)}} {{Currency[printedEdition.currency]}}\n                    </h3>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"body\">\n        <h1>Description</h1>\n        <p>\n            {{printedEdition.description}}\n        </p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <input type=\"text\" autocomplete=\"off\" (keyup)=\"getPrintedEditions()\" class=\"form-control\" id=\"authorsSearch\" [(ngModel)]=\"printedEditionsRequestModel.keyWord\" name=\"keyWord\" #keyWord=\"ngModel\" placeholder=\"Type there for search by printed edition title, description\">\n\n    <div class=\"row mb-5 align-items-end justify-content-around d-flex\">\n        <div class=\"col-sm\">\n            <label for=\"minPrice\" class=\"m-0\">Price from:</label>\n            <input type=\"number\" min=\"0\" class=\"form-control\" id=\"minPrice\" [(ngModel)]=\"filterForm.priceFrom\" name=\"priceFrom\" #priceFrom=\"ngModel\">\n        </div>\n        <div class=\"col-sm\">\n            <label for=\"maxPrice\" class=\"m-0\">Price to:</label>\n            <input type=\"number\" class=\"form-control\" id=\"maxPrice\" [(ngModel)]=\"filterForm.priceTo\" name=\"priceTo\" #priceTo=\"ngModel\">\n        </div>\n\n        <div class=\"col-sm\">\n            <label for=\"sortTypeSelect\" class=\"m-0\">Sort by:</label>\n            <select class=\"form-control\" id=\"sortTypeSelect\" [(ngModel)]=\"filterForm.sortCriteria\">\n      <option *ngFor=\"let item of enumMap(SortCriteria,'None')\" [ngValue]=\"item.id\">\n        {{item.name}}\n      </option>\n    </select>\n        </div>\n        <div class=\"col-sm\">\n            <label for=\"printedEditionTypeSelect\" class=\"m-0\">Printed edition type:</label>\n            <select class=\"form-control\" id=\"printedEditionTypeSelect\" [(ngModel)]=\"filterForm.printedEditionType\">\n      <option *ngFor=\"let item of enumMap(PrintedEditionType,'All types')\" [ngValue]=\"item.id\">\n        {{item.name}}\n      </option>\n    </select>\n        </div>\n\n        <div class=\"col-sm d-flex justify-content-end\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"setSearchParameters()\">search</button>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor=\"let printedEdition of printedEditionsResponseModel.printedEditionModels\" class=\"col-sm-4\">\n            <div>\n                <div class=\"card\">\n                    <a [title]=\"printedEdition.name + ' details'\" [routerLink]=\"[printedEdition.id]\">\n                        <img class=\"card-img-top\" src=\"assets/book.png\" alt=\"Card image cap\">\n                    </a>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title printed-title\">{{printedEdition.name}}</h5>\n                        <p class=\"card-text description\">{{printedEdition.description}}</p>\n                        <p class=\"card-text authors\" *ngFor=\"let author of printedEdition.authorModels\">\n                            {{author.name}}\n                        </p>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                {{printedEdition.price.toFixed(2)}} {{Currency[printedEdition.currency]}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"footer\">\n    <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"printedEditionsResponseModel.count\" [(page)]=\"printedEditionsRequestModel.page\" [pageSize]=\"printedEditionsRequestModel.pageSize\" [maxSize]=\"3\" (pageChange)=\"getPrintedEditions()\"></ngb-pagination>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/home/home.component */ "./src/app/components/home/home.component.ts");




const routes = [
    {
        path: '',
        component: src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'account',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/account/account.module */ "./src/app/modules/account/account.module.ts")).then(mod => mod.AccountModule),
        pathMatch: 'full'
    },
    {
        path: 'printededition',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/printed-edition/printed-edition.module */ "./src/app/modules/printed-edition/printed-edition.module.ts")).then(mod => mod.PrintedEditionModule),
    },
    {
        path: 'admin',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts")).then(mod => mod.AdminModule),
    },
    {
        path: 'user',
        loadChildren: () => Promise.all(/*! import() | src-app-modules-user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-user-user-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/user/user.module */ "./src/app/modules/user/user.module.ts")).then(mod => mod.UserModule),
    },
    {
        path: 'cart',
        loadChildren: () => Promise.all(/*! import() | src-app-modules-cart-cart-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-cart-cart-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/cart/cart.module */ "./src/app/modules/cart/cart.module.ts")).then(mod => mod.CartModule),
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_modules_printed_edition_printed_edition_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/printed-edition/printed-edition.module */ "./src/app/modules/printed-edition/printed-edition.module.ts");
/* harmony import */ var src_app_modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts");
/* harmony import */ var src_app_modules_account_account_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/account/account.module */ "./src/app/modules/account/account.module.ts");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var src_app_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_toast_container_toast_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/toast-container/toast-container.component */ "./src/app/components/toast-container/toast-container.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            src_app_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _components_toast_container_toast_container_component__WEBPACK_IMPORTED_MODULE_15__["ToastContainerComponent"],
        ],
        imports: [
            src_app_modules_account_account_module__WEBPACK_IMPORTED_MODULE_8__["AccountModule"],
            src_app_modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
            src_app_modules_printed_edition_printed_edition_module__WEBPACK_IMPORTED_MODULE_6__["PrintedEditionModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: src_app_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: src_app_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [src_app_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'BookShop';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/authentication.helper */ "./src/app/helpers/authentication.helper.ts");




let HeaderComponent = class HeaderComponent {
    constructor(authHelper) {
        this.authHelper = authHelper;
        this.faCartPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCartPlus"];
        this.faTools = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTools"];
        this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCircle"];
    }
    ngOnInit() {
    }
    logout() {
        this.authHelper.logout();
    }
    isLogedOn() {
        return this.authHelper.isLogedOn();
    }
    isAdmin() {
        return this.authHelper.isAdmin();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_3__["AuthenticationHelper"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/toast-container/toast-container.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/toast-container/toast-container.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 0.5em;\r\n    z-index: 1200;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2FzdC1jb250YWluZXIvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7SUFDUixhQUFhO0lBQ2IsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgei1pbmRleDogMTIwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/toast-container/toast-container.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/toast-container/toast-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: ToastContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerComponent", function() { return ToastContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");



let ToastContainerComponent = class ToastContainerComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngOnInit() {
    }
};
ToastContainerComponent.ctorParameters = () => [
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }
];
ToastContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toast-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toast-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toast-container/toast-container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toast-container.component.css */ "./src/app/components/toast-container/toast-container.component.css")).default]
    })
], ToastContainerComponent);



/***/ }),

/***/ "./src/app/enums/currency.ts":
/*!***********************************!*\
  !*** ./src/app/enums/currency.ts ***!
  \***********************************/
/*! exports provided: Currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Currency;
(function (Currency) {
    Currency[Currency["None"] = 0] = "None";
    Currency[Currency["USD"] = 1] = "USD";
    Currency[Currency["UAH"] = 2] = "UAH";
    Currency[Currency["EUR"] = 3] = "EUR";
})(Currency || (Currency = {}));


/***/ }),

/***/ "./src/app/enums/printedEditionType.ts":
/*!*********************************************!*\
  !*** ./src/app/enums/printedEditionType.ts ***!
  \*********************************************/
/*! exports provided: PrintedEditionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedEditionType", function() { return PrintedEditionType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PrintedEditionType;
(function (PrintedEditionType) {
    PrintedEditionType[PrintedEditionType["None"] = 0] = "None";
    PrintedEditionType[PrintedEditionType["Book"] = 1] = "Book";
    PrintedEditionType[PrintedEditionType["Journal"] = 2] = "Journal";
    PrintedEditionType[PrintedEditionType["Newspaper"] = 3] = "Newspaper";
})(PrintedEditionType || (PrintedEditionType = {}));


/***/ }),

/***/ "./src/app/enums/sortCriteria.ts":
/*!***************************************!*\
  !*** ./src/app/enums/sortCriteria.ts ***!
  \***************************************/
/*! exports provided: SortCriteria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortCriteria", function() { return SortCriteria; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SortCriteria;
(function (SortCriteria) {
    SortCriteria[SortCriteria["None"] = 0] = "None";
    SortCriteria[SortCriteria["PriceAsc"] = 1] = "PriceAsc";
    SortCriteria[SortCriteria["PriceDesc"] = 2] = "PriceDesc";
    SortCriteria[SortCriteria["CurrencyAsc"] = 3] = "CurrencyAsc";
    SortCriteria[SortCriteria["CurrencyDesc"] = 4] = "CurrencyDesc";
})(SortCriteria || (SortCriteria = {}));


/***/ }),

/***/ "./src/app/helpers/authentication.helper.ts":
/*!**************************************************!*\
  !*** ./src/app/helpers/authentication.helper.ts ***!
  \**************************************************/
/*! exports provided: AuthenticationHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationHelper", function() { return AuthenticationHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticationHelper = class AuthenticationHelper {
    isLogedOn() {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return true;
        }
        return false;
    }
    isAdmin() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const decodedToken = atob(currentUser.token.split('.')[1]);
            const userClaims = JSON.parse(decodedToken);
            if (userClaims.role === "admin") {
                return true;
            }
        }
        return false;
    }
    logout() {
        localStorage.removeItem('currentUser');
        location.reload();
    }
};
AuthenticationHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthenticationHelper);



/***/ }),

/***/ "./src/app/helpers/authenticationAdmin.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/helpers/authenticationAdmin.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthenticationAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationAdminGuard", function() { return AuthenticationAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/authentication.helper */ "./src/app/helpers/authentication.helper.ts");




let AuthenticationAdminGuard = class AuthenticationAdminGuard {
    constructor(router, authHelper) {
        this.router = router;
        this.authHelper = authHelper;
    }
    canActivate(route, state) {
        if (this.authHelper.isLogedOn()) {
            if (!this.authHelper.isAdmin()) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthenticationAdminGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_3__["AuthenticationHelper"] }
];
AuthenticationAdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthenticationAdminGuard);



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(toastService) {
        this.toastService = toastService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                localStorage.removeItem('currentUser');
                location.reload(true);
            }
            if (err.status === 400) {
                for (const fieldName in err.error) {
                    if (err.error.hasOwnProperty(fieldName)) {
                        this.toastService.show("Error " + err.status, err.error[fieldName]);
                    }
                }
                return;
            }
            const error = err.error || err.statusText;
            this.toastService.show("Warning", "Unhandled error: something went wrong");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JwtInterceptor = class JwtInterceptor {
    constructor() { }
    intercept(request, next) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/models/accountModels/forgotPasswordRequestModel.ts":
/*!********************************************************************!*\
  !*** ./src/app/models/accountModels/forgotPasswordRequestModel.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordRequestModel", function() { return ForgotPasswordRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ForgotPasswordRequestModel {
}


/***/ }),

/***/ "./src/app/models/accountModels/resetPasswordRequestModel.ts":
/*!*******************************************************************!*\
  !*** ./src/app/models/accountModels/resetPasswordRequestModel.ts ***!
  \*******************************************************************/
/*! exports provided: ResetPasswordRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordRequestModel", function() { return ResetPasswordRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ResetPasswordRequestModel {
}


/***/ }),

/***/ "./src/app/models/accountModels/signInRequestModel.ts":
/*!************************************************************!*\
  !*** ./src/app/models/accountModels/signInRequestModel.ts ***!
  \************************************************************/
/*! exports provided: SignInRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInRequestModel", function() { return SignInRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SignInRequestModel {
}


/***/ }),

/***/ "./src/app/models/accountModels/signInResponseModel.ts":
/*!*************************************************************!*\
  !*** ./src/app/models/accountModels/signInResponseModel.ts ***!
  \*************************************************************/
/*! exports provided: SignInResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInResponseModel", function() { return SignInResponseModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SignInResponseModel {
}


/***/ }),

/***/ "./src/app/models/accountModels/signUpRequestModel.ts":
/*!************************************************************!*\
  !*** ./src/app/models/accountModels/signUpRequestModel.ts ***!
  \************************************************************/
/*! exports provided: SignUpRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRequestModel", function() { return SignUpRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SignUpRequestModel {
}


/***/ }),

/***/ "./src/app/models/authorModels/authorModel.ts":
/*!****************************************************!*\
  !*** ./src/app/models/authorModels/authorModel.ts ***!
  \****************************************************/
/*! exports provided: AuthorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorModel", function() { return AuthorModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AuthorModel {
    constructor() { }
}


/***/ }),

/***/ "./src/app/models/authorModels/authorRequestModel.ts":
/*!***********************************************************!*\
  !*** ./src/app/models/authorModels/authorRequestModel.ts ***!
  \***********************************************************/
/*! exports provided: AuthorRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorRequestModel", function() { return AuthorRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AuthorRequestModel {
    constructor() {
        this.page = 1;
        this.pageSize = 10;
        this.name = '';
        this.withPagination = false;
        this.ignoreAuthorsList = [];
    }
}


/***/ }),

/***/ "./src/app/models/authorModels/authorResponseModel.ts":
/*!************************************************************!*\
  !*** ./src/app/models/authorModels/authorResponseModel.ts ***!
  \************************************************************/
/*! exports provided: AuthorResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorResponseModel", function() { return AuthorResponseModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AuthorResponseModel {
}


/***/ }),

/***/ "./src/app/models/orderModels/cartItemModel.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/orderModels/cartItemModel.ts ***!
  \*****************************************************/
/*! exports provided: CartItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemModel", function() { return CartItemModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CartItemModel {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/models/orderModels/orderRequestModel.ts":
/*!*********************************************************!*\
  !*** ./src/app/models/orderModels/orderRequestModel.ts ***!
  \*********************************************************/
/*! exports provided: OrderRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRequestModel", function() { return OrderRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class OrderRequestModel {
    constructor() {
        this.page = 1;
        this.pageSize = 10;
        this.keyWord = '';
    }
}


/***/ }),

/***/ "./src/app/models/orderModels/orderResponseModel.ts":
/*!**********************************************************!*\
  !*** ./src/app/models/orderModels/orderResponseModel.ts ***!
  \**********************************************************/
/*! exports provided: OrderResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderResponseModel", function() { return OrderResponseModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class OrderResponseModel {
    constructor() {
        this.count = 0;
        this.orderModels = [];
    }
}


/***/ }),

/***/ "./src/app/models/printedEditionModels/printedEditionModel.ts":
/*!********************************************************************!*\
  !*** ./src/app/models/printedEditionModels/printedEditionModel.ts ***!
  \********************************************************************/
/*! exports provided: PrintedEditionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedEditionModel", function() { return PrintedEditionModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/printedEditionType */ "./src/app/enums/printedEditionType.ts");
/* harmony import */ var src_app_enums_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/enums/currency */ "./src/app/enums/currency.ts");



class PrintedEditionModel {
    constructor() {
        this.type = src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_1__["PrintedEditionType"].None;
        this.currency = src_app_enums_currency__WEBPACK_IMPORTED_MODULE_2__["Currency"].None;
        this.authorModels = [];
        this.price = 0;
    }
}


/***/ }),

/***/ "./src/app/models/printedEditionModels/printedEditionRequestModel.ts":
/*!***************************************************************************!*\
  !*** ./src/app/models/printedEditionModels/printedEditionRequestModel.ts ***!
  \***************************************************************************/
/*! exports provided: PrintedEditionRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedEditionRequestModel", function() { return PrintedEditionRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_enums_sortCriteria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/sortCriteria */ "./src/app/enums/sortCriteria.ts");
/* harmony import */ var src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/enums/printedEditionType */ "./src/app/enums/printedEditionType.ts");



class PrintedEditionRequestModel {
    constructor() {
        this.page = 1;
        this.pageSize = 6;
        this.keyWord = '';
        this.priceTo = 0;
        this.priceFrom = 0;
        this.sortCriteria = src_app_enums_sortCriteria__WEBPACK_IMPORTED_MODULE_1__["SortCriteria"].None;
        this.printedEditionType = src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_2__["PrintedEditionType"].None;
    }
}


/***/ }),

/***/ "./src/app/models/printedEditionModels/printedEditionResponseModel.ts":
/*!****************************************************************************!*\
  !*** ./src/app/models/printedEditionModels/printedEditionResponseModel.ts ***!
  \****************************************************************************/
/*! exports provided: PrintedEditionResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedEditionResponseModel", function() { return PrintedEditionResponseModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PrintedEditionResponseModel {
}


/***/ }),

/***/ "./src/app/models/userModels/userModel.ts":
/*!************************************************!*\
  !*** ./src/app/models/userModels/userModel.ts ***!
  \************************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserModel {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/models/userModels/userRequestModel.ts":
/*!*******************************************************!*\
  !*** ./src/app/models/userModels/userRequestModel.ts ***!
  \*******************************************************/
/*! exports provided: UserRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequestModel", function() { return UserRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserRequestModel {
    constructor() {
        this.page = 1;
        this.pageSize = 10;
        this.keyWord = '';
    }
}


/***/ }),

/***/ "./src/app/models/userModels/userResponseModel.ts":
/*!********************************************************!*\
  !*** ./src/app/models/userModels/userResponseModel.ts ***!
  \********************************************************/
/*! exports provided: UserResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResponseModel", function() { return UserResponseModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserResponseModel {
    constructor() {
        this.userModels = [];
    }
}


/***/ }),

/***/ "./src/app/modules/account/account-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/account/account-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modules_account_components_account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/account/components/account/account.component */ "./src/app/modules/account/components/account/account.component.ts");
/* harmony import */ var src_app_modules_account_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/account/components/sign-up/sign-up.component */ "./src/app/modules/account/components/sign-up/sign-up.component.ts");
/* harmony import */ var src_app_modules_account_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/account/components/sign-in/sign-in.component */ "./src/app/modules/account/components/sign-in/sign-in.component.ts");
/* harmony import */ var src_app_modules_account_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/account/components/forgot-password/forgot-password.component */ "./src/app/modules/account/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var src_app_modules_account_components_email_confirmed_email_confirmed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/account/components/email-confirmed/email-confirmed.component */ "./src/app/modules/account/components/email-confirmed/email-confirmed.component.ts");
/* harmony import */ var src_app_modules_account_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/account/components/reset-password/reset-password.component */ "./src/app/modules/account/components/reset-password/reset-password.component.ts");









const routes = [
    {
        path: 'account', component: src_app_modules_account_components_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
        children: [
            { path: 'signup', component: src_app_modules_account_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
            { path: 'signin', component: src_app_modules_account_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"] },
            { path: 'forgotpassword', component: src_app_modules_account_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
            { path: 'resetpassword', component: src_app_modules_account_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"] },
            { path: 'emailconfirmed', component: src_app_modules_account_components_email_confirmed_email_confirmed_component__WEBPACK_IMPORTED_MODULE_7__["EmailConfirmedComponent"] },
        ]
    }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountRoutingModule);



/***/ }),

/***/ "./src/app/modules/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/modules/account/account-routing.module.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/modules/account/components/sign-up/sign-up.component.ts");
/* harmony import */ var src_app_modules_account_components_account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/account/components/account/account.component */ "./src/app/modules/account/components/account/account.component.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/modules/account/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/modules/account/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/modules/account/components/reset-password/reset-password.component.ts");
/* harmony import */ var _components_email_confirmed_email_confirmed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/email-confirmed/email-confirmed.component */ "./src/app/modules/account/components/email-confirmed/email-confirmed.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");














let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"],
            src_app_modules_account_components_account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
            _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
            _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"],
            _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"],
            _components_email_confirmed_email_confirmed_component__WEBPACK_IMPORTED_MODULE_12__["EmailConfirmedComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
        ],
        providers: [_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/modules/account/components/account/account.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/account/components/account/account.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/account/components/account/account.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/account/components/account/account.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let AccountComponent = class AccountComponent {
    constructor() {
        this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCircle"];
    }
    ngOnInit() {
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.css */ "./src/app/modules/account/components/account/account.component.css")).default]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/modules/account/components/email-confirmed/email-confirmed.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/account/components/email-confirmed/email-confirmed.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9jb21wb25lbnRzL2VtYWlsLWNvbmZpcm1lZC9lbWFpbC1jb25maXJtZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/account/components/email-confirmed/email-confirmed.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/account/components/email-confirmed/email-confirmed.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EmailConfirmedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfirmedComponent", function() { return EmailConfirmedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmailConfirmedComponent = class EmailConfirmedComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmailConfirmedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-confirmed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-confirmed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/email-confirmed/email-confirmed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-confirmed.component.css */ "./src/app/modules/account/components/email-confirmed/email-confirmed.component.css")).default]
    })
], EmailConfirmedComponent);



/***/ }),

/***/ "./src/app/modules/account/components/forgot-password/forgot-password.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/account/components/forgot-password/forgot-password.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/account/components/forgot-password/forgot-password.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/account/components/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_accountModels_forgotPasswordRequestModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/accountModels/forgotPasswordRequestModel */ "./src/app/models/accountModels/forgotPasswordRequestModel.ts");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");




let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.isEmailSended = false;
        this.requestModel = new src_app_models_accountModels_forgotPasswordRequestModel__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordRequestModel"]();
        this.requestModel.redirectUrl = 'http://localhost:4200/account/resetpassword';
    }
    ngOnInit() {
    }
    forgotPassword() {
        this.accountService.forgotPassword(this.requestModel)
            .subscribe((success) => {
            this.isEmailSended = true;
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/forgot-password/forgot-password.component.html")).default,
        providers: [src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/modules/account/components/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/modules/account/components/reset-password/reset-password.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/account/components/reset-password/reset-password.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/account/components/reset-password/reset-password.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/account/components/reset-password/reset-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_accountModels_resetPasswordRequestModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/accountModels/resetPasswordRequestModel */ "./src/app/models/accountModels/resetPasswordRequestModel.ts");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(accountService, route) {
        this.accountService = accountService;
        this.route = route;
        this.isPasswordChanged = false;
        this.requestModel = new src_app_models_accountModels_resetPasswordRequestModel__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordRequestModel"]();
        this.querySubscription = route.queryParams.subscribe((queryParam) => {
            this.requestModel.code = queryParam['code'];
            this.requestModel.email = queryParam['email'];
        });
    }
    ngOnInit() {
    }
    resetPassword() {
        this.accountService.resetPassword(this.requestModel).subscribe((sucess) => {
            this.isPasswordChanged = true;
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/reset-password/reset-password.component.html")).default,
        providers: [src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.css */ "./src/app/modules/account/components/reset-password/reset-password.component.css")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/modules/account/components/sign-in/sign-in.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/account/components/sign-in/sign-in.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/account/components/sign-in/sign-in.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/account/components/sign-in/sign-in.component.ts ***!
  \*************************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_accountModels_signInRequestModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/accountModels/signInRequestModel */ "./src/app/models/accountModels/signInRequestModel.ts");
/* harmony import */ var src_app_models_accountModels_signInResponseModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/accountModels/signInResponseModel */ "./src/app/models/accountModels/signInResponseModel.ts");






let SignInComponent = class SignInComponent {
    constructor(accountService, route, router) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.signInRequestModel = new src_app_models_accountModels_signInRequestModel__WEBPACK_IMPORTED_MODULE_4__["SignInRequestModel"]();
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            this.router.navigate(['/']);
        }
    }
    signIn() {
        this.accountService.signIn(this.signInRequestModel).subscribe((data) => {
            const user = new src_app_models_accountModels_signInResponseModel__WEBPACK_IMPORTED_MODULE_5__["SignInResponseModel"]();
            user.token = data.token;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate([this.returnUrl]);
        });
    }
};
SignInComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/sign-in/sign-in.component.html")).default,
        providers: [src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.css */ "./src/app/modules/account/components/sign-in/sign-in.component.css")).default]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/modules/account/components/sign-up/sign-up.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/account/components/sign-up/sign-up.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/account/components/sign-up/sign-up.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/account/components/sign-up/sign-up.component.ts ***!
  \*************************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var src_app_models_accountModels_signUpRequestModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/accountModels/signUpRequestModel */ "./src/app/models/accountModels/signUpRequestModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignUpComponent = class SignUpComponent {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.isSignUpSuccessful = false;
        this.signUpRequestModel = new src_app_models_accountModels_signUpRequestModel__WEBPACK_IMPORTED_MODULE_3__["SignUpRequestModel"]();
        this.signUpRequestModel.redirectUrl = 'http://localhost:4200/account/emailconfirmed';
    }
    ngOnInit() {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            this.router.navigate(['/']);
        }
    }
    signUp() {
        this.accountService.signUp(this.signUpRequestModel).subscribe(() => {
            this.isSignUpSuccessful = true;
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/sign-up/sign-up.component.html")).default,
        providers: [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/modules/account/components/sign-up/sign-up.component.css")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/modules/admin/admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modules_admin_components_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/admin/components/product-management/product-management.component */ "./src/app/modules/admin/components/product-management/product-management.component.ts");
/* harmony import */ var src_app_modules_admin_components_order_management_order_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/admin/components/order-management/order-management.component */ "./src/app/modules/admin/components/order-management/order-management.component.ts");
/* harmony import */ var src_app_modules_admin_components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/admin/components/user-management/user-management.component */ "./src/app/modules/admin/components/user-management/user-management.component.ts");
/* harmony import */ var src_app_helpers_authenticationAdmin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/authenticationAdmin.guard */ "./src/app/helpers/authenticationAdmin.guard.ts");
/* harmony import */ var src_app_modules_admin_components_author_management_author_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/admin/components/author-management/author-management.component */ "./src/app/modules/admin/components/author-management/author-management.component.ts");








const routes = [
    { path: 'productmanagement', component: src_app_modules_admin_components_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_3__["ProductManagementComponent"], canActivate: [src_app_helpers_authenticationAdmin_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationAdminGuard"]] },
    { path: 'ordermanagement', component: src_app_modules_admin_components_order_management_order_management_component__WEBPACK_IMPORTED_MODULE_4__["OrderManagementComponent"], canActivate: [src_app_helpers_authenticationAdmin_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationAdminGuard"]] },
    { path: 'usermanagement', component: src_app_modules_admin_components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_5__["UserManagementComponent"], canActivate: [src_app_helpers_authenticationAdmin_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationAdminGuard"]] },
    { path: 'authormanagement', component: src_app_modules_admin_components_author_management_author_management_component__WEBPACK_IMPORTED_MODULE_7__["AuthorManagementComponent"], canActivate: [src_app_helpers_authenticationAdmin_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationAdminGuard"]] },
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_modules_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/admin/admin-routing.module */ "./src/app/modules/admin/admin-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var src_app_modules_admin_components_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/admin/components/product-management/product-management.component */ "./src/app/modules/admin/components/product-management/product-management.component.ts");
/* harmony import */ var src_app_modules_admin_components_order_management_order_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/admin/components/order-management/order-management.component */ "./src/app/modules/admin/components/order-management/order-management.component.ts");
/* harmony import */ var src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/printed-edition.service */ "./src/app/services/printed-edition.service.ts");
/* harmony import */ var _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-management/user-management.component */ "./src/app/modules/admin/components/user-management/user-management.component.ts");
/* harmony import */ var src_app_modules_admin_components_author_management_author_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/admin/components/author-management/author-management.component */ "./src/app/modules/admin/components/author-management/author-management.component.ts");













let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_modules_admin_components_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_8__["ProductManagementComponent"], src_app_modules_admin_components_order_management_order_management_component__WEBPACK_IMPORTED_MODULE_9__["OrderManagementComponent"], _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_11__["UserManagementComponent"], src_app_modules_admin_components_author_management_author_management_component__WEBPACK_IMPORTED_MODULE_12__["AuthorManagementComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_modules_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        ],
        providers: [src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_10__["PrintedEditionService"], src_app_services_author_service__WEBPACK_IMPORTED_MODULE_7__["AuthorService"]]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/modules/admin/components/author-management/author-management.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/components/author-management/author-management.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy9hdXRob3ItbWFuYWdlbWVudC9hdXRob3ItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/components/author-management/author-management.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin/components/author-management/author-management.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AuthorManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorManagementComponent", function() { return AuthorManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var src_app_models_authorModels_authorModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/authorModels/authorModel */ "./src/app/models/authorModels/authorModel.ts");
/* harmony import */ var src_app_models_authorModels_authorRequestModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/authorModels/authorRequestModel */ "./src/app/models/authorModels/authorRequestModel.ts");
/* harmony import */ var src_app_models_authorModels_authorResponseModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/authorModels/authorResponseModel */ "./src/app/models/authorModels/authorResponseModel.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








let AuthorManagementComponent = class AuthorManagementComponent {
    constructor(modalService, authorService) {
        this.modalService = modalService;
        this.authorService = authorService;
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPencilAlt"];
        this.faBackspace = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBackspace"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlusCircle"];
        this.authorRequestModel = new src_app_models_authorModels_authorRequestModel__WEBPACK_IMPORTED_MODULE_5__["AuthorRequestModel"]();
        this.authorResponseModel = new src_app_models_authorModels_authorResponseModel__WEBPACK_IMPORTED_MODULE_6__["AuthorResponseModel"]();
        this.author = new src_app_models_authorModels_authorModel__WEBPACK_IMPORTED_MODULE_4__["AuthorModel"]();
        this.authorRequestModel.pageSize = 10;
        this.authorRequestModel.withPagination = true;
    }
    ngOnInit() {
        this.getAuthors();
    }
    getAuthors() {
        this.authorService.getAuthors(this.authorRequestModel).subscribe((data) => {
            this.authorResponseModel = data;
        });
    }
    editAuthor(author) {
        this.author = author;
    }
    cancel() {
        this.author = new src_app_models_authorModels_authorModel__WEBPACK_IMPORTED_MODULE_4__["AuthorModel"]();
    }
    save() {
        if (this.author.id) {
            this.authorService.updateAuthor(this.author).subscribe((success) => {
                this.cancel();
                this.getAuthors();
            });
        }
        if (!this.author.id) {
            this.authorService.createAuthor(this.author).subscribe((success) => {
                this.cancel();
                this.getAuthors();
            });
        }
    }
    openModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then((result) => {
        }, (reason) => {
        });
    }
};
AuthorManagementComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_services_author_service__WEBPACK_IMPORTED_MODULE_3__["AuthorService"] }
];
AuthorManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-author-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./author-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/author-management/author-management.component.html")).default,
        providers: [src_app_services_author_service__WEBPACK_IMPORTED_MODULE_3__["AuthorService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./author-management.component.css */ "./src/app/modules/admin/components/author-management/author-management.component.css")).default]
    })
], AuthorManagementComponent);



/***/ }),

/***/ "./src/app/modules/admin/components/order-management/order-management.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/components/order-management/order-management.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy9vcmRlci1tYW5hZ2VtZW50L29yZGVyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/components/order-management/order-management.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin/components/order-management/order-management.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrderManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManagementComponent", function() { return OrderManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_orderModels_orderRequestModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/orderModels/orderRequestModel */ "./src/app/models/orderModels/orderRequestModel.ts");
/* harmony import */ var src_app_models_orderModels_orderResponseModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/orderModels/orderResponseModel */ "./src/app/models/orderModels/orderResponseModel.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");





let OrderManagementComponent = class OrderManagementComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.orderRequestModel = new src_app_models_orderModels_orderRequestModel__WEBPACK_IMPORTED_MODULE_2__["OrderRequestModel"]();
        this.orderResponseModel = new src_app_models_orderModels_orderResponseModel__WEBPACK_IMPORTED_MODULE_3__["OrderResponseModel"]();
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        this.orderService.getOrdersForAdmin(this.orderRequestModel).subscribe((data) => {
            this.orderResponseModel = data;
        });
    }
};
OrderManagementComponent.ctorParameters = () => [
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }
];
OrderManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/order-management/order-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-management.component.css */ "./src/app/modules/admin/components/order-management/order-management.component.css")).default]
    })
], OrderManagementComponent);



/***/ }),

/***/ "./src/app/modules/admin/components/product-management/product-management.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/components/product-management/product-management.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropDownScrollable\r\n{\r\n   height: 100px;\r\n   overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL3Byb2R1Y3QtbWFuYWdlbWVudC9wcm9kdWN0LW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyxhQUFhO0dBQ2IsY0FBYztBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy9wcm9kdWN0LW1hbmFnZW1lbnQvcHJvZHVjdC1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcERvd25TY3JvbGxhYmxlXHJcbntcclxuICAgaGVpZ2h0OiAxMDBweDtcclxuICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/components/product-management/product-management.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin/components/product-management/product-management.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementComponent", function() { return ProductManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_enums_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enums/currency */ "./src/app/enums/currency.ts");
/* harmony import */ var src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enums/printedEditionType */ "./src/app/enums/printedEditionType.ts");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/printed-edition.service */ "./src/app/services/printed-edition.service.ts");
/* harmony import */ var src_app_models_printedEditionModels_printedEditionResponseModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/printedEditionModels/printedEditionResponseModel */ "./src/app/models/printedEditionModels/printedEditionResponseModel.ts");
/* harmony import */ var src_app_models_printedEditionModels_printedEditionRequestModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/printedEditionModels/printedEditionRequestModel */ "./src/app/models/printedEditionModels/printedEditionRequestModel.ts");
/* harmony import */ var src_app_models_printedEditionModels_printedEditionModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/printedEditionModels/printedEditionModel */ "./src/app/models/printedEditionModels/printedEditionModel.ts");
/* harmony import */ var src_app_enums_sortCriteria__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/enums/sortCriteria */ "./src/app/enums/sortCriteria.ts");
/* harmony import */ var src_app_models_authorModels_authorRequestModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/authorModels/authorRequestModel */ "./src/app/models/authorModels/authorRequestModel.ts");
/* harmony import */ var src_app_models_authorModels_authorResponseModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/models/authorModels/authorResponseModel */ "./src/app/models/authorModels/authorResponseModel.ts");















let ProductManagementComponent = class ProductManagementComponent {
    constructor(printedEditionService, authorService, modalService, config) {
        this.printedEditionService = printedEditionService;
        this.authorService = authorService;
        this.modalService = modalService;
        this.config = config;
        this.Currency = src_app_enums_currency__WEBPACK_IMPORTED_MODULE_4__["Currency"];
        this.SortCriteria = src_app_enums_sortCriteria__WEBPACK_IMPORTED_MODULE_11__["SortCriteria"];
        this.PrintedEditionType = src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_5__["PrintedEditionType"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPencilAlt"];
        this.faBackspace = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBackspace"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusCircle"];
        this.printedEditionsRequestModel = new src_app_models_printedEditionModels_printedEditionRequestModel__WEBPACK_IMPORTED_MODULE_9__["PrintedEditionRequestModel"]();
        this.printedEditionsResponseModel = new src_app_models_printedEditionModels_printedEditionResponseModel__WEBPACK_IMPORTED_MODULE_8__["PrintedEditionResponseModel"]();
        this.authorRequestModel = new src_app_models_authorModels_authorRequestModel__WEBPACK_IMPORTED_MODULE_12__["AuthorRequestModel"]();
        this.authorResponseModel = new src_app_models_authorModels_authorResponseModel__WEBPACK_IMPORTED_MODULE_13__["AuthorResponseModel"]();
        this.printedEdition = new src_app_models_printedEditionModels_printedEditionModel__WEBPACK_IMPORTED_MODULE_10__["PrintedEditionModel"]();
        this.printedEditionsRequestModel.pageSize = 10;
        this.config.autoClose = false;
        this.filterForm = new FilterForm();
    }
    ngOnInit() {
        this.getPrintedEditions();
    }
    getPrintedEditions() {
        this.printedEditionService.getPrintedEditions(this.printedEditionsRequestModel).subscribe((data) => {
            this.printedEditionsResponseModel = data;
        });
    }
    getAuthors() {
        this.authorRequestModel.ignoreAuthorsList = this.printedEdition.authorModels;
        this.authorService.getAuthors(this.authorRequestModel).subscribe((data) => {
            this.authorResponseModel = data;
        });
    }
    addAuthorToList(author) {
        this.printedEdition.authorModels.push(author);
        this.getAuthors();
    }
    removeFromList(author) {
        this.printedEdition.authorModels.splice(this.authorRequestModel.ignoreAuthorsList.indexOf(author), 1);
        this.getAuthors();
    }
    edit(printedEdition) {
        this.printedEdition = printedEdition;
    }
    cancel() {
        this.printedEdition = new src_app_models_printedEditionModels_printedEditionModel__WEBPACK_IMPORTED_MODULE_10__["PrintedEditionModel"]();
        this.authorRequestModel = new src_app_models_authorModels_authorRequestModel__WEBPACK_IMPORTED_MODULE_12__["AuthorRequestModel"]();
        this.getPrintedEditions();
    }
    save() {
        if (this.printedEdition.id) {
            this.printedEditionService.updatePrintedEdition(this.printedEdition).subscribe((success) => {
                this.getPrintedEditions();
            });
        }
        if (!this.printedEdition.id) {
            this.printedEditionService.createPrintedEdition(this.printedEdition).subscribe((success) => {
                this.getPrintedEditions();
            });
        }
    }
    openModal(content) {
        this.getAuthors();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then((result) => {
            this.cancel();
        }, (reason) => {
            this.cancel();
        });
    }
    setSearchParameters() {
        this.printedEditionsRequestModel.priceFrom = this.filterForm.priceFrom;
        this.printedEditionsRequestModel.priceTo = this.filterForm.priceTo;
        this.printedEditionsRequestModel.printedEditionType = this.filterForm.printedEditionType;
        this.printedEditionsRequestModel.sortCriteria = this.filterForm.sortCriteria;
        this.getPrintedEditions();
    }
    enumMap(typeEnum, defaultOptionText) {
        let keys = Object.keys(typeEnum);
        let startIndexWithoutDefault = (keys.length / 2) + 1;
        keys = keys.slice(startIndexWithoutDefault);
        let items = new Array();
        items.push(new EnumParams(0, defaultOptionText));
        keys.forEach(function (value, index) {
            let item = new EnumParams((index + 1), value);
            items.push(item);
        });
        return items;
    }
};
ProductManagementComponent.ctorParameters = () => [
    { type: src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_7__["PrintedEditionService"] },
    { type: src_app_services_author_service__WEBPACK_IMPORTED_MODULE_6__["AuthorService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"] }
];
ProductManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/product-management/product-management.component.html")).default,
        providers: [src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_7__["PrintedEditionService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-management.component.css */ "./src/app/modules/admin/components/product-management/product-management.component.css")).default]
    })
], ProductManagementComponent);

class EnumParams {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class FilterForm {
    constructor() {
        this.priceFrom = 0;
        this.priceTo = 0;
        this.sortCriteria = src_app_enums_sortCriteria__WEBPACK_IMPORTED_MODULE_11__["SortCriteria"].None;
        this.printedEditionType = src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_5__["PrintedEditionType"].None;
    }
}


/***/ }),

/***/ "./src/app/modules/admin/components/user-management/user-management.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/components/user-management/user-management.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/components/user-management/user-management.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin/components/user-management/user-management.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_userModels_userRequestModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/userModels/userRequestModel */ "./src/app/models/userModels/userRequestModel.ts");
/* harmony import */ var src_app_models_userModels_userResponseModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/userModels/userResponseModel */ "./src/app/models/userModels/userResponseModel.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_models_userModels_userModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/userModels/userModel */ "./src/app/models/userModels/userModel.ts");








let UserManagementComponent = class UserManagementComponent {
    constructor(userService, modalService) {
        this.userService = userService;
        this.modalService = modalService;
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPencilAlt"];
        this.userRequestModel = new src_app_models_userModels_userRequestModel__WEBPACK_IMPORTED_MODULE_3__["UserRequestModel"]();
        this.userResponseModel = new src_app_models_userModels_userResponseModel__WEBPACK_IMPORTED_MODULE_4__["UserResponseModel"]();
        this.userModel = new src_app_models_userModels_userModel__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.userService.getUsers(this.userRequestModel).subscribe((data) => {
            this.userResponseModel = data;
        });
    }
    editUser(userModel) {
        this.userModel = userModel;
    }
    cancel() {
        this.userModel = new src_app_models_userModels_userModel__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
    }
    saveChanges() {
        this.userService.updateUser(this.userModel).subscribe((success) => {
            this.cancel();
            this.getUsers();
        });
    }
    openModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
            this.cancel();
            this.getUsers();
        });
    }
    changeUserStatus(userModel) {
        this.userModel = userModel;
        this.userModel.isRemoved = !this.userModel.isRemoved;
        this.userService.updateUser(this.userModel).subscribe((success) => {
            this.cancel();
        });
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/components/user-management/user-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management.component.css */ "./src/app/modules/admin/components/user-management/user-management.component.css")).default]
    })
], UserManagementComponent);



/***/ }),

/***/ "./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.css ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJpbnRlZC1lZGl0aW9uL2NvbXBvbmVudHMvcHJpbnRlZC1lZGl0aW9uLWRldGFpbHMvcHJpbnRlZC1lZGl0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PrintedEditionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedEditionDetailsComponent", function() { return PrintedEditionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_printedEditionModels_printedEditionModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/printedEditionModels/printedEditionModel */ "./src/app/models/printedEditionModels/printedEditionModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/printed-edition.service */ "./src/app/services/printed-edition.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_models_orderModels_cartItemModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/orderModels/cartItemModel */ "./src/app/models/orderModels/cartItemModel.ts");
/* harmony import */ var src_app_enums_currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/enums/currency */ "./src/app/enums/currency.ts");








let PrintedEditionDetailsComponent = class PrintedEditionDetailsComponent {
    constructor(route, printedEditionService) {
        this.route = route;
        this.printedEditionService = printedEditionService;
        this.Currency = src_app_enums_currency__WEBPACK_IMPORTED_MODULE_7__["Currency"];
        this.faCartPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCartPlus"];
        this.quantity = 1;
        this.printedEdition = new src_app_models_printedEditionModels_printedEditionModel__WEBPACK_IMPORTED_MODULE_2__["PrintedEditionModel"]();
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
        const cartItem = new src_app_models_orderModels_cartItemModel__WEBPACK_IMPORTED_MODULE_6__["CartItemModel"]();
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
PrintedEditionDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_4__["PrintedEditionService"] }
];
PrintedEditionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-printed-edition-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./printed-edition-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.html")).default,
        providers: [src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_4__["PrintedEditionService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./printed-edition-details.component.css */ "./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.css")).default]
    })
], PrintedEditionDetailsComponent);



/***/ }),

/***/ "./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\r\n    height: 80px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    width: calc(100%);\r\n}\r\n\r\n.authors {\r\n    height: 20px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    width: calc(100%);\r\n}\r\n\r\n.printed-title {\r\n    height: 50px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcmludGVkLWVkaXRpb24vY29tcG9uZW50cy9wcmludGVkLWVkaXRpb25zL3ByaW50ZWQtZWRpdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ByaW50ZWQtZWRpdGlvbi9jb21wb25lbnRzL3ByaW50ZWQtZWRpdGlvbnMvcHJpbnRlZC1lZGl0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUpO1xyXG59XHJcblxyXG4uYXV0aG9ycyB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcclxufVxyXG5cclxuLnByaW50ZWQtdGl0bGUge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PrintedEditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedEditionsComponent", function() { return PrintedEditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/printed-edition.service */ "./src/app/services/printed-edition.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_models_printedEditionModels_printedEditionResponseModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/printedEditionModels/printedEditionResponseModel */ "./src/app/models/printedEditionModels/printedEditionResponseModel.ts");
/* harmony import */ var src_app_models_printedEditionModels_printedEditionRequestModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/printedEditionModels/printedEditionRequestModel */ "./src/app/models/printedEditionModels/printedEditionRequestModel.ts");
/* harmony import */ var src_app_enums_sortCriteria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/enums/sortCriteria */ "./src/app/enums/sortCriteria.ts");
/* harmony import */ var src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/enums/printedEditionType */ "./src/app/enums/printedEditionType.ts");
/* harmony import */ var src_app_enums_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/enums/currency */ "./src/app/enums/currency.ts");









let PrintedEditionsComponent = class PrintedEditionsComponent {
    constructor(modalService, printedEditionService) {
        this.modalService = modalService;
        this.printedEditionService = printedEditionService;
        this.Currency = src_app_enums_currency__WEBPACK_IMPORTED_MODULE_8__["Currency"];
        this.SortCriteria = src_app_enums_sortCriteria__WEBPACK_IMPORTED_MODULE_6__["SortCriteria"];
        this.PrintedEditionType = src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_7__["PrintedEditionType"];
        this.printedEditionsRequestModel = new src_app_models_printedEditionModels_printedEditionRequestModel__WEBPACK_IMPORTED_MODULE_5__["PrintedEditionRequestModel"]();
        this.printedEditionsResponseModel = new src_app_models_printedEditionModels_printedEditionResponseModel__WEBPACK_IMPORTED_MODULE_4__["PrintedEditionResponseModel"]();
        this.filterForm = new FilterForm();
    }
    ngOnInit() {
        this.getPrintedEditions();
    }
    getPrintedEditions() {
        this.printedEditionService.getPrintedEditions(this.printedEditionsRequestModel).subscribe((data) => {
            this.printedEditionsResponseModel = data;
        });
    }
    setSearchParameters() {
        this.printedEditionsRequestModel.priceFrom = this.filterForm.priceFrom;
        this.printedEditionsRequestModel.priceTo = this.filterForm.priceTo;
        this.printedEditionsRequestModel.printedEditionType = this.filterForm.printedEditionType;
        this.printedEditionsRequestModel.sortCriteria = this.filterForm.sortCriteria;
        this.getPrintedEditions();
    }
    enumMap(typeEnum, defaultOptionText) {
        let keys = Object.keys(typeEnum);
        let startIndexWithoutDefault = (keys.length / 2) + 1;
        keys = keys.slice(startIndexWithoutDefault);
        let items = new Array();
        items.push(new EnumParams(0, defaultOptionText));
        keys.forEach(function (value, index) {
            let item = new EnumParams((index + 1), value);
            items.push(item);
        });
        return items;
    }
};
PrintedEditionsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_2__["PrintedEditionService"] }
];
PrintedEditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-printed-editions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./printed-editions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.html")).default,
        providers: [src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_2__["PrintedEditionService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./printed-editions.component.css */ "./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.css")).default]
    })
], PrintedEditionsComponent);

class FilterForm {
    constructor() {
        this.priceFrom = 0;
        this.priceTo = 0;
        this.sortCriteria = src_app_enums_sortCriteria__WEBPACK_IMPORTED_MODULE_6__["SortCriteria"].None;
        this.printedEditionType = src_app_enums_printedEditionType__WEBPACK_IMPORTED_MODULE_7__["PrintedEditionType"].None;
    }
}
class EnumParams {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/modules/printed-edition/printed-edition-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/printed-edition/printed-edition-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PrintedEditionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedEditionRoutingModule", function() { return PrintedEditionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modules_printed_edition_components_printed_editions_printed_editions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/printed-edition/components/printed-editions/printed-editions.component */ "./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.ts");
/* harmony import */ var src_app_modules_printed_edition_components_printed_edition_details_printed_edition_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component */ "./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.ts");





const routes = [
    { path: 'printededition', component: src_app_modules_printed_edition_components_printed_editions_printed_editions_component__WEBPACK_IMPORTED_MODULE_3__["PrintedEditionsComponent"] },
    { path: 'printededition/:printedEditionId', component: src_app_modules_printed_edition_components_printed_edition_details_printed_edition_details_component__WEBPACK_IMPORTED_MODULE_4__["PrintedEditionDetailsComponent"] }
];
let PrintedEditionRoutingModule = class PrintedEditionRoutingModule {
};
PrintedEditionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PrintedEditionRoutingModule);



/***/ }),

/***/ "./src/app/modules/printed-edition/printed-edition.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/printed-edition/printed-edition.module.ts ***!
  \*******************************************************************/
/*! exports provided: PrintedEditionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedEditionModule", function() { return PrintedEditionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_modules_printed_edition_printed_edition_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/printed-edition/printed-edition-routing.module */ "./src/app/modules/printed-edition/printed-edition-routing.module.ts");
/* harmony import */ var src_app_modules_printed_edition_components_printed_editions_printed_editions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/printed-edition/components/printed-editions/printed-editions.component */ "./src/app/modules/printed-edition/components/printed-editions/printed-editions.component.ts");
/* harmony import */ var src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/printed-edition.service */ "./src/app/services/printed-edition.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_modules_printed_edition_components_printed_edition_details_printed_edition_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component */ "./src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");










let PrintedEditionModule = class PrintedEditionModule {
};
PrintedEditionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_modules_printed_edition_components_printed_editions_printed_editions_component__WEBPACK_IMPORTED_MODULE_4__["PrintedEditionsComponent"], src_app_modules_printed_edition_components_printed_edition_details_printed_edition_details_component__WEBPACK_IMPORTED_MODULE_8__["PrintedEditionDetailsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_modules_printed_edition_printed_edition_routing_module__WEBPACK_IMPORTED_MODULE_3__["PrintedEditionRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]
        ],
        providers: [src_app_services_printed_edition_service__WEBPACK_IMPORTED_MODULE_5__["PrintedEditionService"]]
    })
], PrintedEditionModule);



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
    }
    signIn(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Account/SignIn', requestModel);
    }
    signUp(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Account/SignUp', requestModel);
    }
    forgotPassword(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Account/ForgotPassword', requestModel);
    }
    resetPassword(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Account/ResetPassword', requestModel);
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AccountService);



/***/ }),

/***/ "./src/app/services/author.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/author.service.ts ***!
  \********************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AuthorService = class AuthorService {
    constructor(http) {
        this.http = http;
    }
    getAuthors(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Author/GetAuthors', requestModel);
    }
    createAuthor(author) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Author/CreateAuthor', author);
    }
    updateAuthor(author) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Author/UpdateAuthor', author);
    }
};
AuthorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthorService);



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
    }
    sendPaymentData(model) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Order/SendPaymentData', model);
    }
    getCheckout(items) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Order/GetCheckout', items);
    }
    getOrdersForUser() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Order/GetOrdersForUser');
    }
    getOrdersForAdmin(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Order/GetOrdersForAdmin', requestModel);
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./src/app/services/printed-edition.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/printed-edition.service.ts ***!
  \*****************************************************/
/*! exports provided: PrintedEditionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintedEditionService", function() { return PrintedEditionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let PrintedEditionService = class PrintedEditionService {
    constructor(http) {
        this.http = http;
    }
    getPrintedEditions(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'PrintedEdition/GetPrintedEditions', requestModel);
    }
    updatePrintedEdition(printedEditionModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'PrintedEdition/UpdatePrintedEdition', printedEditionModel);
    }
    createPrintedEdition(printedEdition) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'PrintedEdition/CreatePrintedEditon', printedEdition);
    }
    getById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'PrintedEdition/GetById/' + id);
    }
};
PrintedEditionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PrintedEditionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PrintedEditionService);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToastService = class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(header, body) {
        this.toasts.push({ header, body });
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t != toast);
    }
};
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ToastService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'User/GetUsers', requestModel);
    }
    updateUser(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'User/UpdateUser', requestModel);
    }
    getUserProfile() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'User/GetUserProfile');
    }
    updateUserProfile(requestModel) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'User/UpdateUserProfile', requestModel);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    apiUrl: 'https://localhost:44304/api/',
    publishableKey: 'pk_test_8TYjwJdSM7B13g8uHsz2n6rM00anDiFMg6'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anuitex\source\repos\BookShop_ASP_NET_CORE\BookShop.ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map