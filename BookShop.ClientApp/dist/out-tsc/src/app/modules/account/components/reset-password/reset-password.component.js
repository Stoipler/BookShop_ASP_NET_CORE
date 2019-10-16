import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AccountService } from '../../../../services/account.service';
import { ResetPasswordModel } from '../../../../models/resetPasswordModel';
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(accountService, route) {
        this.accountService = accountService;
        this.route = route;
        this.user = new ResetPasswordModel();
        this.isPasswordChanged = false;
        this.querySubscription = route.queryParams.subscribe((queryParam) => {
            this.user.code = queryParam['code'];
            this.user.email = queryParam['email'];
        });
    }
    ngOnInit() {
    }
    resetPassword() {
        this.accountService.resetPassword(this.user).subscribe((data) => {
            this.isPasswordChanged = true;
        }, (error) => {
        });
    }
};
ResetPasswordComponent = tslib_1.__decorate([
    Component({
        selector: 'app-reset-password',
        templateUrl: './reset-password.component.html',
        styleUrls: ['./reset-password.component.css'],
        providers: [AccountService]
    })
], ResetPasswordComponent);
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map