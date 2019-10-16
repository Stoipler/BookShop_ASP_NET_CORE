(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/helpers/authentication.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/authentication.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/authentication.helper */ "./src/app/helpers/authentication.helper.ts");




let AuthenticationGuard = class AuthenticationGuard {
    constructor(router, authHelper) {
        this.router = router;
        this.authHelper = authHelper;
    }
    canActivate(route, state) {
        if (this.authHelper.isLogedOn()) {
            return true;
        }
        this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_3__["AuthenticationHelper"] }
];
AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthenticationGuard);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map